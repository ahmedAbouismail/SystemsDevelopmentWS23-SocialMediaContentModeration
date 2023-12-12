from unittest import TestCase
from hate_speech_service.nlp.svm import SVM

class TestSVM(TestCase):
    def test_predict(self):
        result = SVM.predict('bitch')
        self.assertTrue(result > 0)