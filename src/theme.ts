import { getColors, Theme } from './colors';

export function variables(theme: Theme) {
    const color = getColors(theme);

    return {
        accent: ['accent', 1],
        titleBarBg: ['background', 1],
        titleBarFg: ['foreground', 1],
        bg: color.bg.canvasInset,
        borderColor: '#1B1F23',
        borderColorLight: '#e1e4e8',
        sidebarHeadingFg: '#fafbfc',
        sidebarHeadingFgLight: '#24292e',
        treeHoverBg: '#282e34',
        treeSelectedBg: '#39414a',
        puckControlBg: '#6a737d44',
        tabBorderSize: [0, 1, 1, 1],
        tabSelectedBg: ['background', 1],
        tabSelectedBorderBorderColor: ['accent', 1],
        tabHeight: 40,
        tabWidth: 80,
        statusbarBg: ['background', 1],
        statusBarFg: ['foreground', 1],
        statusbarMargin: [8, 5, 0, 3],
        buttonMinSize: [80, 30],
        vcsBadgeSize: 5,
        vcsIgnored: 'color(var(--foreground) a(.4))',
        vcsModified: 'var(--bluish)',
        vcsUnmerged: 'var(--redish)',
        vcsDeleted: 'var(--pinkish)',
        vcsStaged: 'var(--yellowish)',
        vcsUntracked: 'var(--greenish)',
        vcsMissing: 'var(--orangish)',
    };
}

export function rules(theme: Theme) {
    const color = getColors(theme);

    return [
        {
            class: 'title_bar',
            settings: ['themed_title_bar'],
            bg: 'var(titleBarBg)',
            fg: 'var(titleBarFg)',
            style: 'system',
        },
        {
            class: 'title_bar',
            settings: ['!themed_title_bar'],
            fg: ['background', 255, 255, 255, 0.7],
            bg: ['background', 0, 0, 0, 0.4],
            style: 'system',
        },
        {
            class: 'scroll_tabs_left_button',
            'layer0.texture':
                'GitHub Theme/textures/navigation/arrow-small-left.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            'layer0.tint': 'var(foreground)',
            content_margin: [10, 10],
        },
        {
            class: 'scroll_tabs_left_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'scroll_tabs_right_button',
            'layer0.texture':
                'GitHub Theme/textures/navigation/arrow-small-right.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            'layer0.tint': 'var(foreground)',
            content_margin: [10, 10],
        },
        {
            class: 'scroll_tabs_right_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'scroll_tabs_left_button',
            content_margin: 0,
        },
        {
            class: 'scroll_tabs_right_button',
            content_margin: 0,
        },
        {
            class: 'show_tabs_dropdown_button',
            'layer0.texture': 'GitHub Theme/textures/navigation/more.png',
            'layer0.opacity': 0.5,
            'layer0.tint': 'var(foreground)',
            'layer0.inner_margin': 0,
            content_margin: [10, 10],
        },
        {
            class: 'show_tabs_dropdown_button',
            attributes: ['hover'],
            'layer0.opacity': 1.0,
        },

        {
            class: 'tabset_control',
            'layer0.tint': 'var(bg)',

            'layer1.draw_center': false,
            'layer1.inner_margin': 'var(tabBorderSize)',
            'layer1.tint': 'var(borderColor)',
            'layer1.opacity': 1,

            content_margin: [0, 0, 8, 0],
        },
        {
            class: 'tabset_control',
            'layer0.opacity': 1,
            tint_index: 1,
            tab_overlap: 0,
            tab_width: 'var(tabWidth)',
            tab_height: 'var(tabHeight)',
            mouse_wheel_switch: false,
        },
        {
            class: 'tab_control',
            'layer0.texture': '',
            'layer0.tint': 'var(bg)',
            'layer0.opacity': 1,

            'layer1.texture': '',
            'layer1.tint': 'var(bg)',
            'layer1.opacity': 1,

            'layer2.draw_center': false,
            'layer2.texture': '',
            'layer2.tint': 'var(borderColor)',
            'layer2.inner_margin': 'var(tabBorderSize)',
            'layer2.opacity': 1,

            'layer3.draw_center': false,
            'layer3.texture': '',
            'layer3.tint': 'var(borderColor)',
            'layer3.inner_margin': [0, 0, 1, 1],
            'layer3.opacity': 1,
            tint_modifier: 'var(bg)',
        },
        {
            class: 'tab_control',
            attributes: ['selected'],
            'layer1.tint': 'var(tabSelectedBg)',

            'layer2.inner_margin': [0, 1, 1, 0],

            'layer3.inner_margin': [0, 1, 0, 0],
            'layer3.tint': 'var(tabSelectedBorderBorderColor)',
            tint_modifier: 'var(tabSelectedBg)',
        },
        {
            class: 'grid_layout_control',
            border_color: 'var(borderColor)',
            border_size: 1,
        },
        {
            class: 'sidebar_container',
            'layer0.opacity': 1,
            'layer0.tint': 'var(bg)',
            'layer1.opacity': 1,
            'layer1.inner_margin': [0, 1, 1, 0],
            'layer1.draw_center': false,
            'layer1.tint': 'var(borderColor)',
            content_margin: [0, 6, 0, 0],
        },
        {
            class: 'sidebar_heading',
            fg: 'var(sidebarHeadingFg)',
            'font.size': 'var(font_size_sm)',
        },
        {
            class: 'sidebar_button_control',
            'layer0.texture':
                'GitHub Theme/textures/tree/sidebar-button.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 5.0,
                interpolation: 'smoothstep',
            },
            'layer0.tint': 'var(statusBarFg)',
            content_margin: [7, 7],
        },
        {
            class: 'sidebar_button_control',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 5.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'disclosure_button_control',
            content_margin: [0, 0, 0, 0],
        },
        {
            class: 'disclosure_button_control',
            settings: ['show_sidebar_disclosure'],
            content_margin: [8, 8],
        },
        {
            class: 'fold_button_control',
            'layer0.texture':
                'GitHub Theme/textures/navigation/chevron-right.png',
            'layer0.opacity': 1.0,
            'layer0.tint': ['foreground', 1],
            content_margin: 8,
        },
        {
            class: 'fold_button_control',
            attributes: ['expanded'],
            'layer0.texture':
                'GitHub Theme/textures/navigation/chevron-down.png',
        },
        {
            class: 'fold_button_control',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'status_bar',
            'layer0.opacity': 1,
            'layer0.tint': 'var(statusbarBg)',
            'layer1.opacity': 1,
            'layer1.tint': 'var(borderColor)',
            content_margin: 'var(statusbarMargin)',
        },
        {
            class: 'status_bar',
            settings: ['!adaptive_dividers'],
            'layer1.opacity': 0,
        },
        {
            class: 'label_control',
            parents: [{ class: 'status_bar' }],
            fg: 'var(statusBarFg)',
        },
        {
            class: 'overlay_control',
            'layer0.tint': 'var(borderColor)',
            'layer0.opacity': 1.0,
            content_margin: 1,
        },
        {
            class: 'scroll_track_control',
            'layer0.texture': '',
            'layer0.opacity': 0,
            'layer0.inner_margin': 0,
            content_margin: 6,
        },
        {
            class: 'scroll_bar_control',
            content_margin: 0,
        },
        {
            class: 'puck_control',
            'layer0.texture': '',
            'layer0.opacity': 1.0,
            'layer0.tint': 'var(puckControlBg)',
        },
        {
            class: 'dialog',
            'layer0.tint': ['background', 1],
            'layer0.opacity': 1.0,
        },
        {
            class: 'quick_panel',
            row_padding: [6, 4],
            'layer0.tint': ['background', 1],
            'layer0.opacity': 1.0,
        },
        {
            class: 'quick_panel',
            parents: [{ class: 'overlay_control goto_symbol' }],
            row_padding: 0,
        },
        {
            class: 'quick_panel',
            parents: [{ class: 'overlay_control goto_symbol_in_project' }],
            row_padding: 0,
        },
        {
            class: 'quick_panel_row',
            attributes: ['selected'],
            'layer0.tint': ['foreground', 0.1],
            'layer0.opacity': 1,
        },
        {
            class: 'mini_quick_panel_row',
            attributes: ['selected'],
            'layer0.tint': ['foreground', 0.1],
            'layer0.opacity': 1,
        },
        {
            class: 'quick_panel_path_label',
            link_color: 'var(accent)',
        },
        {
            class: 'panel_control',
            'layer0.tint': 'var(bg)',
            'layer1.opacity': 1,
            'layer1.draw_center': false,
            'layer1.inner_margin': [0, 1, 0, 1],
            'layer1.tint': 'var(borderColor)',
            content_margin: [12, 12],
        },
        {
            class: 'panel_close_button',
            'layer0.texture': '',
            content_margin: 0,
        },
        {
            class: 'text_line_control',
            'layer0.opacity': 1.0,
            'layer0.inner_margin': 2,
            content_margin: 4,
        },
        {
            class: 'panel_control',
            parents: [{ class: 'switch_project_window' }],
            'layer0.tint': 'var(bg)',
            content_margin: 0,
        },
        {
            class: 'dropdown_button_control',
            'layer0.texture': 'GitHub Theme/textures/find/history.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            content_margin: [8, 8],
        },
        {
            class: 'dropdown_button_control',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'button_control',
            content_margin: [10, 10],
            min_size: 'var(buttonMinSize)',
            'layer0.tint': ['foreground', 0.05],
            'layer1.tint': ['foreground', 0.1],
            'layer2.tint': ['foreground', 0.2],
            'layer0.opacity': 1.0,
            'layer1.opacity': 0.0,
            'layer2.opacity': 0.0,
            'layer0.inner_margin': [5, 6],
            'layer1.inner_margin': [5, 6],
            'layer2.inner_margin': [5, 6],
        },
        {
            class: 'button_control',
            attributes: ['hover'],
            'layer0.opacity': 0.0,
            'layer1.opacity': 1.0,
        },
        {
            class: 'button_control',
            attributes: ['pressed'],
            'layer0.opacity': 0.0,
            'layer1.opacity': 0.0,
            'layer2.opacity': 1.0,
        },
        {
            class: 'icon_button_control',
            'layer0.tint': ['foreground', 0.05],
            'layer1.tint': ['foreground', 0.1],
            'layer2.tint': ['foreground', 0.2],
            'layer3.tint': ['foreground', 0.1],
            'layer0.inner_margin': [5, 6],
            'layer1.inner_margin': [5, 6],
            'layer2.inner_margin': [5, 6],
            'layer3.inner_margin': [5, 6],
            'layer0.opacity': 1.0,
            'layer1.opacity': 0.0,
            'layer2.opacity': 0.0,
            'layer3.opacity': 0.0,
            content_margin: [12, 8, 12, 8],
        },
        {
            class: 'icon_button_control',
            attributes: ['hover'],
            'layer1.opacity': 1.0,
        },
        {
            class: 'icon_button_control',
            attributes: ['pressed'],
            'layer2.opacity': 1.0,
        },
        {
            class: 'icon_button_control',
            attributes: ['selected'],
            'layer3.opacity': 1.0,
        },
        {
            class: 'icon_regex',
            'layer0.texture': 'GitHub Theme/textures/find/regex.png',
            'layer0.opacity': 1,
            content_margin: [8, 8],
        },
        {
            class: 'icon_regex',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_regex',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_regex',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
            'layer0.tint': '#fff',
        },
        {
            class: 'icon_case',
            content_margin: [8, 8],
            'layer0.texture':
                'GitHub Theme/textures/find/case-sensitive.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_case',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_case',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_case',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_whole_word',
            content_margin: [8, 8],
            'layer0.texture': 'GitHub Theme/textures/find/whole-word.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_whole_word',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_whole_word',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_whole_word',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_wrap',
            content_margin: [8, 8],
            'layer0.texture': 'GitHub Theme/textures/find/wrap.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_wrap',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_wrap',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_wrap',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_in_selection',
            content_margin: [8, 8],
            'layer0.texture': 'GitHub Theme/textures/find/selection.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_in_selection',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_in_selection',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_in_selection',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_highlight',
            content_margin: [8, 8],
            'layer0.texture': 'GitHub Theme/textures/find/matches.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_highlight',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_highlight',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_highlight',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_preserve_case',
            content_margin: [8, 8],
            'layer0.texture':
                'GitHub Theme/textures/find/preserve-case.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_preserve_case',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_preserve_case',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_preserve_case',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_context',
            content_margin: [8, 8],
            'layer0.texture': 'GitHub Theme/textures/find/context.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_context',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_context',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_context',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_use_buffer',
            content_margin: [8, 8],
            'layer0.texture': 'GitHub Theme/textures/find/buffer.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_use_buffer',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_use_buffer',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_use_buffer',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_use_gitignore',
            content_margin: [8, 8],
            'layer0.texture': 'GitHub Theme/textures/find/gitignore.png',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_use_gitignore',
            parents: [
                { class: 'icon_button_control', attributes: ['hover'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_use_gitignore',
            parents: [
                { class: 'icon_button_control', attributes: ['pressed'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'icon_use_gitignore',
            parents: [
                { class: 'icon_button_control', attributes: ['selected'] },
            ],
            'layer0.opacity': 1.0,
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'file_system_entry', attributes: ['untracked'] },
            ],
            'layer0.texture': 'Meetio Theme/textures/vcs/vcs_untracked.png',
            'layer0.tint': 'var(vcsUntracked)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'file_system_entry', attributes: ['modified'] },
            ],
            'layer0.texture': 'GitHub Theme/textures/vcs/diff_modified.png',
            'layer0.tint': 'var(vcsModified)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'file_system_entry', attributes: ['added'] },
            ],
            'layer0.texture': 'GitHub Theme/textures/vcs/diff_added.png',
            'layer0.tint': 'var(vcsUntracked)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'file_system_entry', attributes: ['unmerged'] },
            ],
            'layer0.texture': 'Theme - Default/common/status_unmerged.png',
            'layer0.tint': 'var(vcsUnmerged)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'file_system_entry', attributes: ['staged'] },
            ],
            'layer0.texture': 'GitHub Theme/textures/vcs/diff_staged.png',
            'layer0.tint': 'var(vcsStaged)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'file_system_entry', attributes: ['deleted'] },
            ],
            'layer0.tint': 'var(vcsDeleted)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'file_system_entry', attributes: ['missing'] },
            ],
            'layer0.tint': 'var(vcsMissing)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [{ class: 'tree_row', attributes: ['expandable'] }],
            'layer0.texture': 'Theme - Default/common/status_modified.png',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'tree_row', attributes: ['expandable'] },
                { class: 'file_system_entry', attributes: ['unmerged'] },
            ],
            'layer0.texture': 'Theme - Default/common/status_unmerged.png',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['ignored'] },
            ],
            color: 'color(var(vcsIgnored)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['untracked'] },
            ],
            color: 'var(vcsUntracked)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['modified'] },
            ],
            color: 'var(vcsModified)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['added'] },
            ],
            color: 'var(vcsUntracked)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['unmerged'] },
            ],
            color: 'var(vcsUnmerged)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['missing'] },
            ],
            color: 'var(vcsMissing)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['deleted'] },
            ],
            color: 'var(vcsDeleted)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['staged'] },
            ],
            color: 'var(vcsStaged)',
        },
        {
            class: 'icon_folder',
            'layer0.texture': 'GitHub Theme/textures/tree/folder.png',
            'layer0.opacity': 0.5,
            content_margin: [8, 8],
        },
        {
            class: 'icon_folder',
            parents: [{ class: 'tree_row', attributes: ['expanded'] }],
            'layer0.texture':
                'GitHub Theme/textures/tree/folder-opened.png',
            content_margin: [8, 8],
        },
        {
            class: 'icon_folder_dup',
            'layer0.texture': 'GitHub Theme/textures/tree/folder-dup.png',
            content_margin: [8, 8],
        },
        {
            class: 'tree_row',
            attributes: ['hover'],
            'layer0.tint': 'var(treeHoverBg)',
            'layer0.opacity': 1.0,
        },
        {
            class: 'tree_row',
            attributes: ['selected'],
            'layer0.tint': 'var(treeSelectedBg)',
            'layer0.opacity': 1.0,
        },
        {
            class: 'vcs_branch_icon',
            'layer0.texture': 'GitHub Theme/textures/vcs/branch.png',
            'layer0.tint': 'var(statusBarFg)',
            content_margin: [5, 5],
        },
        {
            class: 'vcs_changes_annotation',
            border_color: 'var(borderColor)',
            'font.face': 'var(font_face)',
            color: 'var(statusBarFg)',
            content_margin: [3, 1],
        },
    ];
}

export function getTheme(theme: Theme) {
    return {
        variables: variables(theme),
        rules: rules(theme),
    };
}
