import { invoke } from '@tauri-apps/api/tauri';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('greet-btn')?.addEventListener('click', async () => {
        try {
            const msg = await invoke('greet', { name: 'UViewer' });
            document.getElementById('greet-msg').textContent = msg;
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command