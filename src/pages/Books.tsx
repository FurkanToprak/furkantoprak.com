const books: {
    title: string;
    author: string;
}[] = [
        { title: "The Gulag Archipelago", author: "Aleksandr Solzhenitsyn" },
        { title: "Man's Search for Meaning", author: "Viktor Frankl" },
        { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky" },
        { title: "Harry Potter and the Sorcerer's Stone", author: "J. K. Rowling" },
        { title: "Evolutionary dynamics", author: "Martin A. Nowak" },
        { title: "Beyond Good and Evil", author: "Frederich Nietzche" },
        {
            title: "Hands-On Machine Learning with Scikit-Learn & TensorFlow",
            author: "Aurelien Geron",
        },
        { title: "Give People Money", author: "Annie Lowrey" },
        { title: "1984", author: "George Orwell" },
        {
            title: "Discrete Mathematics and Its Applications",
            author: "Kenneth H. Rosen",
        },
        { title: "Maps of Meaning", author: "Jordan B. Peterson" },
        { title: "On The Social Contract", author: "Jean-Jacques Rousseau" },
        { title: "You Are Not So Smart", author: "David McRaney" },
        { title: "The Count of Monte Cristo", author: "Alexandre Dumas" },
        { title: "Night", author: "Elie Wiesel" },
        {
            title: "The Federalist Papers",
            author: "Plubius (Alexander Hamilton, John Jay, and James Madison)",
        },
        { title: "Hamlet", author: "William Shakespeare" },
        { title: "Hard Times", author: "Charles Dickens" },
        { title: "The Trial", author: "Franz Kafka" },
        { title: "Pimp", author: "Iceberg Slim" },
        { title: "The Prince", author: "Niccolo Machiavelli" },
    ];
function ReadingList() {
    return (
        <div>
            <ul>
                {books.map((book) => (
                    <li>
                        <i>
                            <u>{book.title}</u>
                        </i>{" "}
                        by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Books() {
    return <div>
        <h3 style={{ textAlign: "center" }}>books that have changed my life</h3>
        <ReadingList />
    </div>
}