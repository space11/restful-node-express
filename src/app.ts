
import { ExpressLoader } from './loaders/express-loader';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.listen(port, () => {
//   console.log(`Running on port ${port}`);
// });
 
const app = new ExpressLoader();
