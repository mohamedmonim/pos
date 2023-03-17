

// signup another way
// module.exports.signup= async(req,res)=>{
//     const {name,age,email,password}=req.body;
   
//     // email exist
//     const user= await userModel.findOne({email})
//    if(user){
//     res.json({message:"email already exist"})
//    }
//    else {  
//          const bcrypt= require("bcrypt")
//         bcrypt.hash(password,4,async function(err,hash) {
//          await userModel.insertMany({name,email,age,password:hash})
//           res.json({message:"success"})
//       })
//     }

// without email exist
// await userModel.insertMany({name,age,email})
// res.json({message:"success"})
//}






// Signin  another way 
// module.exports.signin=async(req,res)=>{
//   const{email,password}=req.body;

//   // check email
//  let user = await userModel.findOne({email:req.body.email})
//  if(user){

//    // check password
//   const match = await bcrypt.compare(password, user.password);
//    if(match){
//       // login success
//       res.json({message:"loged in" ,  user   })
//         }
//    else{
//       res.json({message:"incorret password"})
//        }
//     }

//   else {
//       res.json({message:"email doesn't exist"})
//     }
// }
