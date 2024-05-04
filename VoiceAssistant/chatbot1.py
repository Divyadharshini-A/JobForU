import speech_recognition as sr
import pyttsx3

def recognize_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio)
            return text.lower()
        except sr.UnknownValueError:
            return ""

def ask_question(question):
    engine = pyttsx3.init()
    engine.say(question)
    engine.runAndWait()

def conduct_interview(questions):
    for question in questions:
        ask_question(question)
        response = recognize_speech()
        if response:
            print("Response:", response)
        else:
            print("No response detected.")

if __name__ == "__main__":
    questions = [
        "What is your name?",
        "Tell me about yourself.",
        "Why do you want to work here?",
        # Add more questions as needed
    ]
    conduct_interview(questions)
