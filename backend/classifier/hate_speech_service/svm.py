# svm.py
import os
import pandas as pd
import argparse
from data_processing.data_preprocessing import DataPreprocessing


class SVM:
    def __init__(self):
        self.labels = ["no hate", "negative stereotyping", "dehumanization", "violence & killing", "equation",
                       "normalization of existing discrimination", "disguise as irony", "harmful slander", "skip"]

    def predict(self, text):
        path = os.path.join('SVM_Model.pkl')
        cv, clf = pd.read_pickle(path)

        clean_text = DataPreprocessing.clean_text([text])
        text_svm = cv.transform(clean_text)

        prediction = int(clf.predict(text_svm.toarray())[0])
        label = self.labels[prediction]

        return prediction, label


def main():
    parser = argparse.ArgumentParser(description="Hate Speech Classification")
    parser.add_argument("text", type=str, help="The text to classify")

    args = parser.parse_args()
    text = args.text

    svm_classifier = SVM()
    prediction, label = svm_classifier.predict(text)

    print(f"Predicted Class: {label}")
    print(f"Class Index: {prediction}")


if __name__ == "__main__":
    main()
