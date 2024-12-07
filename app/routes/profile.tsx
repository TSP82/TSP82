function MyProfile() {
    return (
        <>
        <div className="p-5 m-5 border-2 border-green-600 rounded">
            <h1>wachragorn soontornprasit
            </h1>
            <strong>032231323132</strong>
            <MyEducation/>   
        </div></>
    );
}
function MyEducation() { 
    return (
        <>
 <div>
            <ul>
                <li>IT Rmutto</li>
                <li>IT Rmutto</li>
                <li>IT Rmutto</li>
                </ul>
                </div></>
    );
}

export default MyProfile;