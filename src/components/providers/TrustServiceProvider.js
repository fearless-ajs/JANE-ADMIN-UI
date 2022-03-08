class TrustServiceProvider {

    hasRole(currentUser, expectedRole){
        let roleStatus = false;
        if (currentUser){
            currentUser.roles.forEach(role => {
                // If user is a player
                if (role.role.name === expectedRole){
                    roleStatus = true;
                }
            });
        }
        return roleStatus;
    }
}

export default new TrustServiceProvider