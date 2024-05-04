from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import speech_recognition as sr
import pyttsx3

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('start_interview')
def start_interview():
    questions = [
        "What is your name?",
        "Tell me about yourself.",
        "Why should we hire you?",
        "Why did you choose this career?",
        "Why do you want to work here?",
    ]
    answers = []
    recognizer = sr.Recognizer()
    engine = pyttsx3.init()

    for question in questions:
        engine.say(question)
        engine.runAndWait()
        with sr.Microphone() as source:
            emit('ask_question', question)
            print("Listening...")
            recognizer.adjust_for_ambient_noise(source)
            audio = recognizer.listen(source)
            try:
                answer = recognizer.recognize_google(audio)
                answers.append(answer)
                emit('show_answer', answer)
            except sr.UnknownValueError:
                answers.append("No response detected.")
                emit('show_answer', "No response detected.")

    emit('interview_complete', answers)

if __name__ == '__main__':
    socketio.run(app, debug=True)
