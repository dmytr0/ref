// js/models-data.js
const RAW_BASE_REPO_URL = 'https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master';
const BASE_REPO_URL = 'https://github.com/dmytr0/glory_to_ukraine/tree/master';

const modelsData = [
    {
        id: 'dji-antenna-mount',
        title: 'Тримач цифрових антен DJI',
        tags: ['manta10', 'mark4v2', 'dji', 'digital'],
        category: 'fpv-antenna-mounts',
        description: `## Тримач цифрових антен DJI

Друк:
- Тримач антен x1
    - [Універсальний](${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/D_ant_mount_ditch_manta10_v0.3.stl) підходить під різні бази.
- База тримача антен x1
    - [Manta10](${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/foldable_ant_mount_base_manta10_v0.3.stl)
    - [Mark4V2](${RAW_BASE_REPO_URL}/FPV_ANT_mount/foldable_ant_mount_base_mark4_v0.3.stl)

Для збірки потрібен гвинт **M3x30** (від стеку)`,
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/2.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/2.jpg`,
        downloadUrl: `${BASE_REPO_URL}/FPV_ANT_mount/`
    }
    // Додавайте свої моделі тут
];

const CATEGORIES = {
    'fpv-antenna-mounts': 'FPV маунти антен',
    'fpv-gimbals': 'FPV поворотки',
    'fpv-misc': 'FPV різне',
    'misc': 'Різне'
};