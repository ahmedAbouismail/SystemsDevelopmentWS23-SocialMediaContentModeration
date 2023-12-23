import json
from .hatespeech_type import HateSpeechType


class HateSpeech():
    def __init__(self, text, type: HateSpeechType):
        self.text = text
        self.type = type

    def __repr__(self):
        return '<HateSpeech(name={self.type!r})>'.format(self=self)

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__,sort_keys=True, indent=4)
