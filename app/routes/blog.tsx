function Myblogs() {
    var title = "xxx";
    var description = "yyy";
    var rating = 4;
    let enabled = true;
    const pi = 2.14;

    // Debug: console output
    console.log("Rating: " + rating);

    // Arrow functions
    const getRating = () => {
        return <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>;
    };

    const getRating2 = (r) => {
        let msg = [];
        for (let i = 0; i < r; i++) {
            msg.push(<span key={i}>&#11088;</span>); // Render each star as a separate JSX element
        }
        return <span>{msg}</span>;
    };

    return (
        <div className="m-3">
            <h1 className="text-lg font-bold">รีวิว สถานที่ท่องเที่ยว</h1>
            <p><strong>หัวข้อ : </strong>{title}</p>
            <p><strong>รายละเอียด : </strong>{description}</p>
            <p><strong>ชื่นชอบ : </strong>{getRating2(rating)}</p>
            <p><strong>อื่นๆ : </strong>...</p>
            <h1 className="text-lg font-bold">Comments:</h1>
            <Comment
                avatar="/images/ไก่กลม2.jpg"
                message="สวัสดีครับ"
                author="Karn Kai"
                top={true}
            />
            <Comment
                avatar="/images/ไก่กลม2.jpg"
                message="หิวเมื่อไหร่ก็แวะมา"
                author="Karn Kai"
                top={false}
            />
        </div>
    );
}

function Comment({ avatar, message, author, top }) {
    return (
        <div>
            <GetTop top={top} />
            <img
                src={avatar}
                title={author}
                width={40}
                alt="Avatar"
            />
            <p>{message}</p>
            <i>{author}</i>
            <hr />
            <br />
        </div>
    );
}

function GetTop({ top }) {
    if (top) {
        return <span style={{ color: "red" }}>&#10084;</span>; // Return JSX heart
    }
    return null; // Return null if no content is needed
}

export default Myblogs;
