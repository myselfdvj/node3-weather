
console.log("this is simple client side javascript....")

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')


weatherform.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const location = search.value
    console.log(location)
    messageone.textContent = 'Loading..'
    messagetwo.textContent = ''
    fetch('http://localhost:8081/weather?search='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            messageone.textContent = data.error
            //console.log(data.error)
        }
        else
        {
        
            messageone.innerHTML = data.location
            messagetwo.innerHTML = data.forecast
           // console.log(data.location)
          //  console.log(data.forecast)
        }

    })
    })
})