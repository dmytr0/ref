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
    },

    {
        id: 'vtx_ant_mount_1',
        title: 'Кріплення антени VTX назад (long)',
        tags: ['antenna', 'mark4v2', 'mount'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/vtx_ant_mount_1.md',
        images: [
            `media/vtx_ant_mount_1.png`
        ],
        preview: `media/vtx_ant_mount_1.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },

    {
        id: 'povorotna-camera-mount-v3',
        title: 'Поворотна камера V3',
        tags: ['camera', 'mount', 'servo', 'rotating', 'mark4v1', 'mark4v2', 'manta10', 'dji', 'o3', 'o4', 'caddx', 'ratel', 'runcam', 'thermo'],
        category: 'fpv-cam-mounts',
        descriptionFile: 'descriptions/povorotna-camera-mount-v3.md',
        images: [
            'media/povorotna_v3.png',
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/media/4.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/media/2.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/media/3.jpg`
        ],
        preview: 'media/povorotna_v3.png',
        detailsUrl: `${BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3`
    },

    {
        id: 'povorotna-camera-mount-v3-wide',
        title: 'Поворотна камера V3 широка',
        tags: ['camera', 'mount', 'servo', 'rotating', 'mark4v2', 'manta10', 'caddx', '640ca', '384ca', 'AC640', 'wide', '28mm', 'thermal'],
        category: 'fpv-cam-mounts',
        descriptionFile: 'descriptions/povorotna-camera-mount-v3-wide.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta/media/1.png`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta/media/9.png`,
            `media/povorotna-camera-mount-v3-wide.png`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta/media/1.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta`
    },

    {
        id: 'digital_vtx_stand',
        title: 'Підставка для цифрових VTX',
        tags: ['DJI', 'dji', 'o3', 'o4', 'xl10v7', 'manta10', 'mark4v2'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/digital_vtx_stand.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/dji_O3_stand.png`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/dji_O4_pro_stand.png`,
            `media/xl10V7_vtx_stand.png`,
            `media/xl10V7_inv_vtx_stand.png`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/dji_O4_pro_stand.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_CAMERA_MOUNT/`
    },
    {
        id: 'fpv_stack_spacers',
        title: 'FPV проставки для стопки дронів',
        tags: ['fpv', 'spacer'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/fpv_stack_spacers.md',
        images: [
            `${RAW_BASE_REPO_URL}/FPV_stack_spacers/3.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_stack_spacers/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_stack_spacers/2.jpg`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_stack_spacers/3.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_stack_spacers`
    },

    {
        id: 'fpv_stack_adapters',
        title: 'FPV stack адаптери',
        tags: ['fpv', 'adapter'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/fpv_stack_adapters.md',
        images: [
            `${RAW_BASE_REPO_URL}/stack_mount/media/44_stack_adapter_1.jpg`,
            `${RAW_BASE_REPO_URL}/stack_mount/media/44_stack_adapter_2.jpg`,
            `media/30.5_to_35_adapter.png`
        ],
        preview: `${RAW_BASE_REPO_URL}/stack_mount/media/44_stack_adapter_1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/stack_mount`
    },

    {
        id: 'pd_qc_module',
        title: 'PD/QC модуль від XT60',
        tags: ['PD', 'QC', 'XT60', 'Charger'],
        category: 'misc',
        descriptionFile: 'descriptions/pd_qc_module.md',
        images: [
            `${RAW_BASE_REPO_URL}/PD_QC_module/5.jpg`,
            `media/pd-qc.png`,
            `media/pd-qc-vm.png`,
            `${RAW_BASE_REPO_URL}/PD_QC_module/3.jpg`,
            `${RAW_BASE_REPO_URL}/PD_QC_module/7.jpg`,
        ],
        preview: `${RAW_BASE_REPO_URL}/PD_QC_module/5.jpg`,
        detailsUrl: `${BASE_REPO_URL}/PD_QC_module`
    },

    {
        id: 'rk6006_xy5008_box',
        title: 'Компактний корпус для DCDC модулів RK6006/XY5008',
        tags: ['rk6006', 'xy5008', 'xy5005', 'XT60', 'DCDC', 'Box', 'Case'],
        category: 'misc',
        descriptionFile: 'descriptions/rk6006_xy5008_box.md',
        images: [
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box/1.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box/2.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box/3.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box`
    },

    {
        id: 'portable_lab_power_supply',
        title: 'Портативний автономний блок живлення на 50V',
        tags: ['rk6006', 'xy5008', 'xy5005', 'XT60', 'DCDC', 'Box', 'Case'],
        category: 'misc',
        descriptionFile: 'descriptions/portable_lab_power_supply.md',
        images: [
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/2.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/1.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/3.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/4.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/5.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/6.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/2.jpg`,
        detailsUrl: `${BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous`
    },

    {
        id: 'rf_power_meter_mod',
        title: 'Корпус під RF потужномір з модифікацією',
        tags: ['powermeter'],
        category: 'misc',
        descriptionFile: 'descriptions/rf_power_meter_mod.md',
        images: [
            `${RAW_BASE_REPO_URL}/RF_power_meter/1.jpg`,
            `media/powermeter.png`
        ],
        preview: `${RAW_BASE_REPO_URL}/RF_power_meter/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/RF_power_meter`
    },

    {
        id: 'spool_holder_roller',
        title: 'Роликовий тримач котушки (3кг)',
        tags: ['spool holder'],
        category: 'misc',
        descriptionFile: 'descriptions/spool_holder_roller.md',
        images: [
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/1.png`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/2.png`,
            `media/spool_holder_roller_x2.png`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/3.jpg`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/4.jpg`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/5.jpg`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/6.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/spool_holder_roller/media/1.png`,
        detailsUrl: `${BASE_REPO_URL}/spool_holder_roller`
    }


];

const CATEGORIES = {
    'fpv-antenna-mounts': 'FPV маунти антен',
    'fpv-cam-mounts': 'FPV маунти камер',
    'fpv-misc': 'FPV різне',
    'misc': 'Різне'
};