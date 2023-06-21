// Select the database to use.
use('ReactBackendProject');
// Insert a few documents into the PortfolioData collection.
// db.getCollection('projects').insertMany(
//     [
//         {
          
//             image: 'https://cdn.dribbble.com/userupload/7518943/file/original-b39a16475b25ac10559e04034bd8b9b7.png?compress=1&resize=1504x1128',
//             title: 'Online Crypto Casino',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21632973-Online-Crypto-Casino-Mobile-Designs',
//         },
//         {
       
//             image: 'https://cdn.dribbble.com/userupload/7531024/file/original-28960363b0b1e5a03c2f6f1f077c298e.jpg?compress=1&resize=1504x1128',
//             title: 'Education App UIX',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21637001-Education-App-UIX',
//         },
//         {
//             image: 'https://cdn.dribbble.com/userupload/7474794/file/original-ec5e3ff0615f4ec018a8662d76206bde.jpg?compress=1&resize=1504x1126',
//             title: 'Recipe app design',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21617723-Recipe-app-design',
//         },
//         {
        
//             image: 'https://cdn.dribbble.com/userupload/7527073/file/original-a56488a4a04a23bfbeb97cafc030dde5.png?compress=1&resize=1504x1128',
//             title: 'OnStep - Shoes Store',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21635811-OnStep-Shoes-Store',
//         },
//         {
     
//             image: 'https://cdn.dribbble.com/users/5147614/screenshots/17480773/media/77bbee6dafd811f65d14bd38f4c426ab.png?compress=1&resize=1200x900&vertical=top',
//             title: 'Mobile App Exploration',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/17480773-NWS-Mobile-App-Exploration',
//         },
//         {
       
//             image: 'https://cdn.dribbble.com/userupload/7528445/file/original-4b13d4c68619e9e932565427083bb19d.jpg?compress=1&resize=1504x1126',
//             title: 'Recipe app',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21636337-Recipe-app',
//         }

//     ]
// );

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//     [
   //         {
   //           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
   //           name: 'Oben Desmond ',
   //           review: "I had the pleasure of working with Mariek on a cyber security project, and I was impressed with her level of knowledge and attention to detail. She demonstrated a strong understanding of security concepts and was able to apply them effectively in practice. Mariek was also a great team player, always willing to help and share her expertise. Her contribution was instrumental in ensuring the security of our network and data."
   //         },
           
   //         {
   //           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rvvFzP2v-40awpf_uw6dq1UVh8R3jkGM2rrrqIbd6Ih3_d_fCEW8Fn0sl5OsJ1qaLuo&usqp=CAU',
   //           name: 'Ruth Kadhiri ',
   //           review: "I had the opportunity to collaborate with Mariek on a cyber security assignment, and I was impressed with her work ethic and dedication. She approached the task with a high level of professionalism and rigor, and her attention to detail was exceptional. Mariek was able to identify potential security vulnerabilities and propose effective solutions to mitigate them. Her work was critical in ensuring the security and integrity of our system."
   //         },
        //    {
        //      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
        //      name: 'Kevin Obin',
        //      review: "I had the pleasure of mentoring Mariek, a beginner cyber security student, and I was impressed with her progress and dedication. She showed a strong interest in the field and was eager to learn new skills and techniques. Mariek was also proactive in seeking feedback and incorporating it into her work. Her contribution to our team was significant, and I have no doubt that she have a bright future ahead in the field of cyber security."
        //    },
   //         {
   //           avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
   //           name: 'Dua Lipa',
   //           review: "I had the opportunity to work with Mariek, a beginner cyber security student, and was thoroughly impressed by her professionalism and attention to detail. She demonstrated a strong understanding of security protocols and was able to identify potential vulnerabilities in our system. Mariek was able to propose effective solutions to mitigate these risks and her contributions were invaluable in ensuring the security of our data. I would highly recommend her for any cyber security project."
   //         },
         
         
//          ]
//    );
// db.testimonials.deleteMany({
//     name:'Kevin Obin'
// });

// db.testimonials.updateMany(
//     {name:'Dua Lip'},
//     {$set: {name:'Dua Lipa'}}

//     );