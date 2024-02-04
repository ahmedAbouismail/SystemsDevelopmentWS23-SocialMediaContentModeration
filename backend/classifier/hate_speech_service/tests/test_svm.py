from unittest import TestCase
from unittest.mock import patch, MagicMock
from classifier.hate_speech_service.svm import SVM


class TestSVM(TestCase):
    @patch('classifier.hate_speech_service.data_processing.data_preprocessing.DataPreprocessing.clean_text')
    @patch('classifier.hate_speech_service.svm.pd.read_pickle')
    @patch('classifier.hate_speech_service.svm.os.path.join')

    def test_predict(self, mock_join, mock_read_pickle, mock_clean_text):
        mock_join.return_value = 'mock_path'
        mock_clean_text.return_value = 'clean_text'
        mock_read_pickle.return_value = (MagicMock(), MagicMock())
        mock_read_pickle.return_value[0].transform.return_value.toarray.return_value = ['mock_array']
        mock_read_pickle.return_value[1].predict.return_value = [0]
        svm = SVM()

        result = svm.predict('you suck!')

        # Assert
        mock_join.assert_called_once_with('../backend/classifier/hate_speech_service/SVM_Model.pkl')
        mock_read_pickle.assert_called_once_with('mock_path')
        mock_clean_text.assert_called_once_with(['you suck!'])
        mock_read_pickle.return_value[0].transform.assert_called_once_with('clean_text')
        mock_read_pickle.return_value[1].predict.assert_called_once_with(['mock_array'])
        self.assertEqual(result, (1, "no hate"))