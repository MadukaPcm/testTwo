// import card1 from '../images/mmm.jpg';
// import star from '/images/star.png';

export default function Card(props){

    const names = ["Frank","Maduka","coder","Huyu","noma"]
    const num = [12,4,5,6,90,5]     
    
    const Num = num.map(function nm(item) {
        return item
    })
    console.log(Num)

    const Name = names.map((nm)=>
        nm[0].toUpperCase()+nm.slice(1)
    )
    console.log(Name)

    const upperCase = names.map(function uc(item){
        return item[0].toUpperCase()+item.slice(1)
    })
    console.log(upperCase)
    
    
    const data = new Date();
    const hours = data.getHours();
    let timeOfDay;

    if (hours < 12){
        timeOfDay = "mornig";
    }   
    else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon";
    }
    else{
        timeOfDay = "night";
    }

    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} alt="card1img" className="card--image" />
            <div className="card--stats">
                {props.star && <img src={props.star} className='card--star' alt='card 01' />}
                <span style={{display: props.like ? "block":"none"}}>{props.like}</span>
                <span className='gray'>(6) .</span> 
                <span className='gray' style={{display: props.name ? "block":"none"}}>From: {props.name}</span>         
            </div>   
            <p>Life Lessons with katie zaferes</p>
            <p><span className='bold'>From $136 / person</span></p>
            <p>good {timeOfDay}!</p>
        </div>
    )
}