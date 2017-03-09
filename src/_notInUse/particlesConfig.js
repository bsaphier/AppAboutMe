export default {
  particles: {
    number: {
      value: 0.62,
      density: {
        enable: true,
        value_area: 90
      }
    },
    color: {
      value: '#444fff'
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 5,
        color: 'transparent'
      },
      polygon: {
        nb_sides: 6
      },
    },
    opacity: {
      value: 0.62,
      random: true,
      anim: {
        enable: false,
        speed: 0.25,
        opacity_min: 0.38,
        sync: false
      }
    },
    size: {
      value: 200,
      random: true,
      anim: {
        enable: true,
        speed: 0.38,
        size_min: 160,
        sync: true
      }
    },
    line_linked: {
      enable: false,
      distance: 420,
      color: '#444eee',
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.38,
      direction: 'top-left',
      random: true,
      straight: true,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 154,
        size: 5,
        duration: 8,
        opacity: 0.3,
        speed: 6
      },
      repulse: {
        distance: 146,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
