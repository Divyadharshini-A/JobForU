import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('interview_responses.db')
c = conn.cursor()

# Create a table to store responses if it doesn't exist
c.execute('''CREATE TABLE IF NOT EXISTS responses
             (question text, response text)''')

# Commit changes and close the connection
conn.commit()
conn.close()

print("Database initialized successfully.")
