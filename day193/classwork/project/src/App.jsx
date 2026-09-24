import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";



function App() {
  /*უნდა გქონდესსამი კომპონენტი --> App , Header ,Main

შენი დავალებააა რომ Header კომპონენტშ შექმნა მინიმალისტური ჰედერი , ნავიგაციიის ღილაკებით მაგ:home about contact us

Main კომპონენტში უნდა გქოდნეს დივი სადაც გექნება ინფორმაცია შენზე --> სახელი გვარი ასაკი მისამართი

და App ში კი უნდა გქონდეს შექმნილი მინი footer სადაც გექნება ღილაკები მაგ: email , contact , facebook 


შენი დავალებაა App ში ჯერგამოიძახო Header კომპონენტი შემდეგ Main, App კომპონენტში შექმნილ ფუტერამდე */

  return (
    <>
      <Header/>
      <Main/>
      <div>
        <button>email</button>
        <button>contact</button>
        <button>facebook</button>
    </div>
    </>
  )
}

export default App
