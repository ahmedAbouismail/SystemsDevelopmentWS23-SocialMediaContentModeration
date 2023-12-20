from nltk.corpus import stopwords
import re
from nltk.stem.snowball import SnowballStemmer
from nltk.tokenize import word_tokenize


class DataPreprocessing:
    stemmer = SnowballStemmer("english")
    stop_words = set(stopwords.words("english"))
    substitutions = {
        r"<[^>]+>": " ",
        r"[^A-Za-zÀ-ž ]": " ",
        r"\b[A-Za-zÀ-ž]\b": " ",
        r"\s+": " ",
        r"what's": "what is ",
        r"yuhhhh|yuh": " ",
        r"don't|cant": lambda match: "do not" if match.group() == "don't" else "cannot",
        r"wtffff|wtf": "what the fuck",
        r"plz": "pleaze",
        r"uhhh": "",
        r"stfu": "shut the fuck up",
        r"ofc": "of course",
        r"wasn't": "was not",
        r"i'm": "i am",
        r"dont": "do not",
        r"bitchh": "bitch",
        r"realli": "really",
    }

    @staticmethod
    def clean_text(text):
        content_clean = []

        for text_entry in text:
            for pattern, replacement in DataPreprocessing.substitutions.items():
                if callable(replacement):
                    text_entry = re.sub(pattern, replacement, text_entry)
                else:
                    text_entry = re.sub(pattern, replacement, str(text_entry))

            text_entry = re.sub(r"\s+", " ", text_entry.strip())
            text_entry = word_tokenize(text_entry.lower())
            words_filtered = [DataPreprocessing.stemmer.stem(word) for word in text_entry if
                              word not in DataPreprocessing.stop_words]
            text_clean = " ".join(words_filtered)
            content_clean.append(text_clean)

        return content_clean
