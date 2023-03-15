export const GetUserQuery = (payload: any) => {
    try {
        let query =
            `query{
                getUser(input:{
                    userUniqueKey: ${payload?.userUniqueKey ? `"${payload?.userUniqueKey}"` : `""`}
                    email: "${payload.email}",
                    password: "${payload?.password}"
                })
            }
        `
        return query;
    } catch (ex) {
        console.log("Error in GetUserQuery::" + ex);
    }
}

export const createOrUpdateUserQuery = (payload: any) => {
    try {
        let query =
            `mutation{
                createOrUpdateUser(input:{
                    userUniqueKey: ${payload?.userUniqueKey ? `"${payload?.userUniqueKey}"` : `""`}
                    name: "${payload.name}",
                    email: "${payload.email}",
                    password: "${payload?.password}"
                })
            }
        `
        return query;
    } catch (ex) {
        console.log("Error in createUserQuery::" + ex);
    }
}