import { DateTime } from 'luxon';
import { createPostPreviewItemFrom, PostPreview } from '../PostPreview';
const tempDescription = `Quasi beatae eveniet cupiditate dolorem consectetur. Ut dolore corrupti adipisci veritatis cumque. Et et quae ad dicta molestiae corporis officiis laboriosam. Dolorem odit possimus soluta iusto necessitatibus. Numquam eum praesentium atque molestias quia ducimus qui. Enim numquam est soluta vel voluptatem qui eum.

Consectetur modi enim voluptatem adipisci facere ipsa autem. Nihil vel molestias adipisci. Est aut a et aut tempore voluptas. Optio tempora id consequuntur nemo perspiciatis aut ipsum. Non laboriosam accusantium quia. Consequatur vel qui voluptatibus.

Molestiae accusantium possimus molestias. Itaque odit doloribus molestiae voluptas aut consequatur doloribus. Est corrupti delectus possimus impedit saepe est.

Expedita alias quisquam unde facere ad quod quos. Dicta et minima repellat adipisci eum rem voluptatem. Quam necessitatibus doloremque ut quas quia aut. Rerum placeat reiciendis quam sunt est praesentium nemo.

Aut omnis adipisci qui libero libero quia. Voluptas dolor quisquam libero rerum iste sit voluptatem dicta. Rem molestiae laborum porro qui ad.`;

const items = [
  createPostPreviewItemFrom(
    'you probably dont need useEffect',
    tempDescription,
    'https://google.com',
    DateTime.now().minus({ days: 1 })
  ),
  createPostPreviewItemFrom(
    'you probably dont need useEffect',
    tempDescription,
    'https://google.com',
    DateTime.now().minus({ days: 2 })
  ),
  createPostPreviewItemFrom(
    'you probably dont need useEffect',
    tempDescription,
    'https://google.com',
    DateTime.now().minus({ days: 3 })
  ),
  createPostPreviewItemFrom(
    'you probably dont need useEffect',
    tempDescription,
    'https://google.com',
    DateTime.now().minus({ days: 4 })
  ),
];

export function PostsPreview() {
  return (
    <div className='grid gap-6'>
      {items.map((i) => (
        <PostPreview
          key={i.date.toUnixInteger()}
          createdAt={i.date}
          description={i.description}
          link={i.link}
          title={i.title}
        />
      ))}
    </div>
  );
}
