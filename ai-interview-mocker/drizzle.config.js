/**@type {import("drizzle-kit").Config} */
export default{
    schema:"./utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://userdata_owner:npg_jGN0S2IHBRKA@ep-delicate-boat-a4f7ertn-pooler.us-east-1.aws.neon.tech/userdata?sslmode=require',
    }
};