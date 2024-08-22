import {useEffect, useState} from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Split from 'react-split';
import {onSnapshot, addDoc, doc, deleteDoc, setDoc} from 'firebase/firestore';
import {notesCollection, db} from '../firebase';

export default function App() {
	const [notes, setNotes] = useState([]);
  
	const [currentNoteId, setCurrentNoteId] = useState();

  const [tempNoteText, setTempNoteText] = useState('')

	const currentNote =
		notes.find((note) => note.id === currentNoteId) || notes[0];

  const sortedNotes = notes.sort((a,b) => (b.updatedAt - a.updatedAt))

	useEffect(() => {
		// localStorage.setItem("notes", JSON.stringify(notes))
		const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
			//Sync up our local notes array wit hteh snapshot data
			console.log('things changing');
			const notesArray = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setNotes(
				notesArray.sort((a, b) => {
					return b.updatedAt - a.updatedAt;
				}),
			);
		});
		return unsubscribe;
	}, []);

	useEffect(() => {
		if (!currentNoteId) {
			setCurrentNoteId(notes[0]?.id);
		}
	}, [notes]);

  useEffect(() => {
    if(currentNote) {
      setTempNoteText(currentNote.body)
    }
  }, [currentNote])

  useEffect(() => {
    const timeOutId = setTimeout(()=> {
      if(tempNoteText !== currentNote.body) {
        updateNote(tempNoteText)
      }
    }, 500)
    return () => clearTimeout(timeOutId)
  }, [tempNoteText])


	async function createNewNote() {
		const newNote = {
			body: "# Type your markdown note's title here",
			createdAt: Date.now(),
			updatedAt: Date.now(),
		};
		const newNoteRef = await addDoc(notesCollection, newNote);
		setCurrentNoteId(newNoteRef.id);
	}

	async function updateNote(text) {
		const docRef = doc(db, 'notes', currentNoteId);
		await setDoc(docRef, {body: text, updatedAt: Date.now()}, {merge: true});
	}

	async function deleteNote(noteId) {
		const docRef = doc(db, 'notes', noteId);
		await deleteDoc(docRef);
	}

	return (
		<main>
			{notes.length > 0 ? (
				<Split
					sizes={[30, 70]}
					direction="horizontal"
					className="split">
					<Sidebar
						notes={sortedNotes}
						currentNote={currentNote}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
						deleteNote={deleteNote}
					/>

					<Editor
						tempNoteText={tempNoteText}
						setTempNoteText={setTempNoteText}
					/>
				</Split>
			) : (
				<div className="no-notes">
					<h1>You have no notes</h1>
					<button
						className="first-note"
						onClick={createNewNote}>
						Create one now
					</button>
				</div>
			)}
		</main>
	);
}
