import { createRoot } from 'react-dom/client'
import './index.css'
import { Bootloader } from './components/bootloader.tsx';

createRoot(document.getElementById('root')!).render(<Bootloader />);

