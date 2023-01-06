import '../App.css'

function Docs () {

    return(
        <div className='App'>
            <div className='App-heading'>Quick Tips
                <div className='App-paragraph'>When you insert a new model, you might have to navigate <br/> 
                to the home page to refresh the site and then navigate back to the insert page to see <br/> 
                your newly inserted model.</div>
                <div className='App-paragraph'>Please note that all inserted models will be deleted after <br/> 
                two days, this project uses object life cycle management from Firebase to delete any files<br/> 
                that are inserted to keep things tidy in the storage.</div>
            </div>
            <div className='App-heading2'>Contact Info
                <div className='App-paragraph2'>If you have any questions, email me!</div>
                <div className='App-paragraph2'>bibhorgurung@gmail.com</div>
            </div>
        </div>
    )
}

export default Docs;