const Theme = () => {
  const themeColors = [
    {
      theme: {
        name: 'Dracula',
        link: 'https://draculatheme.com/visual-studio-code/'
      },
      background: {
        backgroundColor: 'rgba(33, 34, 44, 1)'
      },
      title: {
        color: 'rgba(139, 233, 253, 1)'
      },
      titleHover: {
        color: 'rgba(139, 233, 253, .7)'
      },
      pageLink: {
        color: 'rgba(80, 250, 123, 1)'
      },
      pageLinkHover: {
        color: 'rgba(80, 250, 123, .7)'
      },
      highLight: {
        color: 'rgba(255, 121, 198, 1)'
      },
      highLightHover: {
        color: 'rgba(255, 121, 198, .7)'
      }
    },
    {
      theme: {
        name: 'Night Owl',
        link:
          'https://marketplace.visualstudio.com/items?itemName=sdras.night-owl'
      },
      background: {
        backgroundColor: 'rgba(1, 22, 39, 1)'
      },
      title: {
        color: 'rgba(127, 219, 202, 1)'
      },
      titleHover: {
        color: 'rgba(127, 219, 202, .7)'
      },
      pageLink: {
        color: 'rgba(173, 219, 103, 1)'
      },
      pageLinkHover: {
        color: 'rgba(173, 219, 103, .7)'
      },
      highLight: {
        color: 'rgba(199, 146, 234, 1)'
      },
      highLightHover: {
        color: 'rgba(199, 146, 234, .7)'
      }
    },
    {
      theme: {
        name: 'Cobalt2',
        link:
          'https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2'
      },
      background: {
        backgroundColor: 'rgba(25, 53, 73, 1)'
      },
      title: {
        color: 'rgba(158, 255, 255, 1)'
      },
      titleHover: {
        color: 'rgba(158, 255, 255, .7)'
      },
      pageLink: {
        color: 'rgba(255, 198, 0, 1)'
      },
      pageLinkHover: {
        color: 'rgba(255, 198, 0, .7)'
      },
      highLight: {
        color: 'rgba(255, 98, 140, 1)'
      },
      highLightHover: {
        color: 'rgba(255, 98, 140, .7)'
      }
    }
  ];
  return themeColors[Math.floor(Math.random() * themeColors.length + 0)];
};
export default Theme;
