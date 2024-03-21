const mongoose=require('mongoose');
const SinhVienSchema=new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    picture:{
        type: String,
        require: true
    }
});
const SinhVien=mongoose.model('SinhVien', SinhVienSchema);
module.exports=SinhVien;