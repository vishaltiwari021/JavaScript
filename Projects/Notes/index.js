const notecontainer = document.querySelector('.note-container');
const createbtn  = document.querySelector('.btn');
let notes = JSON.parse(localStorage.getItem('notes') || '[]');

// Display saved notes when page loads
function showNotes() {
    notecontainer.innerHTML = '';
    notes.forEach((note, index) => {
        let inputbox = document.createElement('div');
        inputbox.className = 'input-box';
        
        // Create timestamp element
        let timestamp = document.createElement('div');
        timestamp.className = 'timestamp';
        timestamp.textContent = note.date || 'No date';
        
        // Create editable content area
        let content = document.createElement('p');
        content.setAttribute('contentEditable', 'true');
        content.className = 'content';
        content.textContent = note.text || '';
        
        // Add delete icon
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash';
        deleteIcon.addEventListener('click', () => {
            deleteNote(index);
        });
        
        // Assemble the note
        inputbox.appendChild(timestamp);
        inputbox.appendChild(content);
        inputbox.appendChild(deleteIcon);
        
        // Add event listener for content changes
        content.addEventListener('input', () => {
            updateNote(index, content.textContent);
        });
        
        notecontainer.appendChild(inputbox);
    });
}

// Add new note
createbtn.addEventListener('click', () => {
    // Create new note with current timestamp
    const now = new Date();
    const formattedDate = now.toLocaleString();
    
    let newNote = {
        text: '',
        date: formattedDate
    };
    
    notes.push(newNote);
    saveNotes();
    showNotes();
});

// Delete note function
function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    showNotes();
}

// Update note content
function updateNote(index, content) {
    notes[index].text = content;
    saveNotes();
}

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Convert old format notes to new format if needed
function migrateNotesFormat() {
    let needsMigration = false;
    
    notes = notes.map(note => {
        if (typeof note === 'string') {
            needsMigration = true;
            return {
                text: note,
                date: new Date().toLocaleString()
            };
        }
        return note;
    });
    
    if (needsMigration) {
        saveNotes();
    }
}

// Initialize
migrateNotesFormat();
showNotes();