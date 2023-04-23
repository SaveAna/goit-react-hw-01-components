import Profile from '../components/Profile';
import user from '../user.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

// export default function App() {
//   return (
//     <div>
//       {user.map(userCard => (
//         <Profile
//           username={userCard.username}
//           tag={userCard.tag}
//           location={userCard.location}
//           avatar={userCard.avatar}
//           stats={userCard.stats}
//         />
//       ))}
//     </div>
//   );
// }
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
