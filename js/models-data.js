// js/models-data.js
const RAW_BASE_REPO_URL = 'https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master';
const BASE_REPO_URL = 'https://github.com/dmytr0/glory_to_ukraine/tree/master';

const modelsData = [
    {
        id: 'dji-antenna-mount',
        title: 'Складний тримач цифрових антен DJI',
        tags: ['manta10', 'mark4v2', 'dji', 'digital'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/dji-antenna-mount.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/2.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/2.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount/`
    },


    {
        id: 'rx_2.4_foldable_mount',
        title: 'Складний тримач RX 2.4 антен',
        tags: ['manta10', 'mark4v2', 'rx', '2.4'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/rx_2.4_foldable_mount.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/3.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/4.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/7.png`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/5.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/6.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/4.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },
    {
        id: 'static-camera-mounts',
        title: 'Статичні кріплення для FPV камер',
        tags: ['static', 'camera', 'mount', 'dji', 'o3', 'o4', 'vtx', 'mark4v2', 'manta10', 'xl10v6', 'xl10v7', 'apex', 'flyflex', 'pidr', 'cx10', 'waveshare', 'custom'],
        category: 'fpv-cam-mounts',
        descriptionFile: 'descriptions/static-camera-mounts.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/m4v2_o4_static_2.png`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/m4v2_o4_static_1.png`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/2.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/3.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/m4v2_o4_static_2.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static`
    },
    {
        id: 'fpv_power_wire_soldering_helper',
        title: 'Хелпер пайки силових',
        tags: ['helper'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/fpv_power_wire_soldering_helper.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_power_wire_soldering_HELPER/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_power_wire_soldering_HELPER/2.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_power_wire_soldering_HELPER/3.jpg`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_power_wire_soldering_HELPER/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_power_wire_soldering_HELPER`
    },

    {
        id: 'ant_arm_support',
        title: 'Підтримка довгих антен (Beta)',
        tags: ['antenna', 'mark4v1', 'mark4v2'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/ant_arm_support.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/2.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },

    {
        id: 'ant_arm_mount',
        title: 'Кріплення антени на промінь',
        tags: ['antenna', 'mark4v1', 'mark4v2', 'mount', 'arm', 'manta10', 'xl10v6', 'xl10v7'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/ant_arm_mount.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/4.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/3.png`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/4.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },

    {
        id: 'front_vtx_ant_mount_wings',
        title: 'Кріплення антен на передню частину рами (wings)',
        tags: ['antenna', 'mark4v1', 'mark4v2', 'mount', 'xl10v6', 'xl10v7'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/front_vtx_ant_mount_wings.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/xl10v7.png`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/sma_wings.png`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/5.png`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/5.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    }

];

const CATEGORIES = {
    'fpv-antenna-mounts': 'FPV маунти антен',
    'fpv-cam-mounts': 'FPV маунти камер',
    'fpv-misc': 'FPV різне',
    'misc': 'Різне'
};