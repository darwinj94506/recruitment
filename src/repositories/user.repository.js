const BaseRepository = require("./base.repository");
let _user=null;
class UserRepository extends BaseRepository {
    constructor({ User }){
        super(User);
        _user = User;
    }
}

module.exports = UserRepository;
