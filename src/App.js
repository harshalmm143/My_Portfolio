import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-typed/dist/animatedCursor.css';
import Frantpage from './Frantpage';
import MyNavbar from './MyNavbar';
import Intro from './Intro';
import Team from './Team';
import Services from './Services';
import Contact from './Contact'
import About from './About'
import Form from './Form'
import StudyM from './StudyM'
import New from './New'
import CodeHack from './CodeHack';
import RecentWork from './RecentWork';
import AdminPanel from './AdminPanel';
import Prog from './Prog';
import Work from './Work';
import Harsh from './Harsh'
import Asdf from './Asdf';
import Pservice from './Pservice';
import Histroy from './Histroy';
import Spin from './Spin';




function App() {
     return (
          <div>
                <section id='frantpage'>
                    <MyNavbar />
               </section>
               <section id='frantpage'>
                    <Frantpage />
               </section>
               <section id='intro'>
                    <Intro />
               </section>
               <section id='about'>
                    <About />
               </section>
               <section id='skills'>
                    <Prog />
               </section>
               <section id='team'>
                    <Team />
               </section>
               <section id='services'>
                    <Pservice/>
               </section>
               <section id='work'>
                    <RecentWork />
               </section>
               <section id='histroy'>
                    <Histroy/>
               </section> 
               <section id='contact'>
                    <Contact />
               </section> 
               {/* <Spin/> */}
                    {/* <Asdf/> */}
               {/* <MyNavbar/> */}
               {/* <Frantpage/> */}
               {/* <Team/> */}
               {/* <Work/> */}
               {/* <Prog/> */}
               {/* <StudyM/>  */}
               {/* <About/> */}
               {/* <New/> */}
               {/* <Form/> */}
               {/* <CodeHack/> */}
               {/* <Work/> */}
               {/* <Services/> */}
               {/* <AdminPanel/> */}
               {/* <RecentWork/> */}
               {/* <Harsh/> */}
               {/* <Intro /> */}
               {/* <Services /> */}
               
          </div>
     )
}

export default App;
