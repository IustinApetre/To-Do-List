import Express from 'express';
import bodyParser from 'body-parser';

const app = Express();
const tasks = [];
const gym = [];

app.set('view engine', 'ejs');
app.use(Express.static( 'public'));

app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', (req, res) => {
  res.render('index', { tasks });
});


app.post('/add', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
 
  res.redirect('/');
});



app.post('/delete', (req, res) => {
  const index = req.body.index;
  tasks.splice(index, 1);
  res.redirect('/');
});





app.get('/gym-workout', (req, res) => {
  res.render('gym-workout', { gym }); 
});


app.post('/addGym', (req, res) => {
  const newGym = req.body.gym;
  gym.push(newGym);
 
  res.redirect('/gym-workout');
});

app.post('/deleteGym', (req, res) => {
  const index1 = req.body.index1;
  gym.splice(index1, 1);
 
  res.redirect('/gym-workout');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
