//stop the form action 
let form=document.querySelector('form');
    form.addEventListener('submit', e => e.preventDefault())
    //the throwback msg 

    //now get elements of the items'
    let btn, col, img,msg;
     btn=document.querySelector('.upload');
     col=document.querySelector('.retrieve');
     msg=document.querySelector('.msg');
     img=document.querySelector('img')

     

      
        //now upload image function 
    img=document.querySelector('input');

    //now set a change event of it 
    
    img.addEventListener('change', e =>{
         
       let file=e.target;
       let  theFile=file.files[0];

       //throw back messages
       let {success , err} = {
        success:`${theFile.name}`,
        err:'error'
    }
        msg.textContent=`${success}`



        //now upload the files
        btn.onclick=e=>{
            

            //now let upload the image
            let storageRef=firebase.storage().ref("Uploads/"+file);
           let store=storageRef.put(theFile.name);
            store.on('state_change' , snapshot => {
                console.log('uploaded')
            })


        }
        
    })

        