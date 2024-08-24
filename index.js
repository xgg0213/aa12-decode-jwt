// Parsing a JWT

const sampleJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im15c2VsZkBhcHBhY2FkZW15LmlvIn0.EqRikwoGyAlfvblF_FdbnQlbAQGvWZlccFnmHOVdaLg";

// #1: Splitting the JWT into 3 parts: header, payload, signature

// Your code here
const jwtArray = sampleJwt.split(".");
const [header, payload, signature] = jwtArray;

// #2: Decoding a JWT's header and payload
// Hint: Buffer.from(string, 'base64').toString();

// Your code here 
const decodedHeader = Buffer.from(header, 'base64').toString();
const decodedPayload = Buffer.from(payload, 'base64').toString();

// #3: Finally, take note of the algorithm and email in the decoded header and
// payload when you run this file. You'll need these to complete the next quiz.
console.log(decodedHeader);
console.log(decodedPayload);