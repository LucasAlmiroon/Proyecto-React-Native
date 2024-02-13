import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sessions.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS sessionsUser (email TEXT NOT NULL, localId TEXT PRIMARY KEY NOT NULL, idToken TEXT NOT NULL)',
                [],
                () => resolve(),
                (_, error) => reject(error))
        })
    })
    return promise
}

export const insertSession = ({ email, localId, idToken }) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO sessionsUser (email, localId, idToken) VALUES(?,?,?);',
                [email, localId, idToken],
                () => resolve(),
                (_, error) => reject(error))
        })
    })
    return promise
}

export const fetchSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM sessionsUser;',
                [],
                (_, { rows }) => resolve(rows),
                (_, error) => reject(error))
        })
    })
    return promise
}