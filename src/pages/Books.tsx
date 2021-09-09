interface ReadingSchema {
    title: string;
    author: string;
}

const books: ReadingSchema[] = [
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
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky"}
];

const papers: ReadingSchema[] = [
    { title: "\"Why Should I Trust You?\" Explaining the Predictions of Any Classifier", author: "Ribeiro et al" },
    { title: "Towards Explaining Recommendations Through Local Surrogate Models", author: "Nobrega & Marinho" },
    { title: "Evolving Neural Networks through Augmenting Topologies", author: "Stanley & Miikkulainen" },
    { title: "Random Search for Hyper-Parameter Optimization", author: "Bergstra & Bengio" },
    { title: "Varying environments can speed up evolution", author: "Alon et al" },
    { title: "Transparent, Scrutable and Explainable User Models for Personalized Recommendation", author: "Arakelyan et al", },
    { title: "The Impact of Legalized Abortion on Crime", author: "Donohue & Levitt"},
    { title: "Building a morbidostat: an automated continuous-culture device for studying bacterial drug resistance under dynamically sustained drug inhibition", author: "Toprak et al"}
];

function ReadingList(props: { readingList: ReadingSchema[] }) {
    return (
        <div>
            <ul>
                {props.readingList.map((listItem) => (
                    <li>
                        <i>
                            <u>{listItem.title}</u>
                        </i>{" "}
                        by {listItem.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Books() {
    return <div>
        <h3 style={{ textAlign: "center" }}>books that have changed my life</h3>
        <ReadingList readingList={books} />
        <h3 style={{ textAlign: "center" }}>cool papers</h3>
        <ReadingList readingList={papers} />
    </div>
}