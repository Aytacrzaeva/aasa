const wrapper=document.getElementById("wrapper")
axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
         console.log(res)
         let html=""
         for (let i = 0; i < res.data.length; i++) {
            const{
                userId,
                id,
                title,
                body
            }=res.data[i]
            html+=`
        <tr>
        <th scope="row">${userId}</th>
        <td>${id}</td>
        <td>${title}</td>
        <td>${body}</td>
        </tr>
            `
            
            
         }
         wrapper.innerHTML=html
    }
       
    
)