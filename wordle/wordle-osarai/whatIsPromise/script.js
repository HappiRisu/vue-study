
const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("성공")
    }, 1000)
  })
}

const borderRed = async () => {
  
  try{
    const box = document.querySelectorAll(".box");
    for(let i = 0; i < box.length; ++i){
      await waitOneSecond();
      box[i].style.borderColor = "#ff0000"
    }
  }catch(error){
    console.log(error)
  }
} 

borderRed();


