```javascript
import { NavLink } from 'react-router-dom'
;<NavigationMenu
  link={NavLink}
  active={'/txn'}
  items={[
    { name: 'Транзакции', path: '/txn' },
    { name: 'Статистика и аналитика', path: '/' },
    { name: 'Документы', path: '/docs' },
    { name: 'Документы123', path: '/docs123' },
  ]}
/>
```
