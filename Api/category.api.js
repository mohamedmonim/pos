
const router = require('express').Router()   // 1

const   {getCategories  , creatCategory ,getOneCategory, updatetOneCategory ,deletetOneCategory } = require ('../Services/category.serv')  // 4
const   {ProtectedRoutes} = require ('../Auth/user.auth')  // 4
const   {allowTo} = require ('../Auth/user.auth')  // 4





// Add routes
  router.route('/').post(ProtectedRoutes,allowTo('admin'),creatCategory).get(getCategories)     // 3
  router.route('/:id').get(getOneCategory).put(ProtectedRoutes,allowTo('admin','user'),updatetOneCategory).delete(ProtectedRoutes,allowTo('admin','user'),deletetOneCategory)
  
  



 
module.exports = router;  // 2
  