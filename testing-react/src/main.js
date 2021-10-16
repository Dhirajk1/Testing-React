import React, {Component} from 'react'
import './index.css'

class Main extends Component{
    render(){
        return(
            <div class='site-container'>
                <table>
                    <tr>
                        <td>
                        <body class='align'>
                            <img class='pfp' src="https://avatars.githubusercontent.com/u/25961063?v=4" alt="Github PFP"></img><h1>Dhiraj Kuttichirayil</h1>
                            <h4>Welcome to my React website!</h4>
                            <h3 class='uiuc'>UIUC | Statistics & Computer Science '25</h3>
                        </body>
                        </td>
                        <td>   
                            <p class='right'>
                                <h2>About Me:</h2>
                                Hi! My name is Dhiraj Kuttichirayil and I’m an undergraduate student studying Statistics and Computer Science at the University of Illinois Urbana-Champaign.<br></br>
                                I’m interested in data science and web development.In my free time I like to take walks and watch anime.
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Main
