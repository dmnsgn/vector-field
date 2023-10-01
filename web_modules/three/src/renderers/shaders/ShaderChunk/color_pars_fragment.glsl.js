var color_pars_fragment = /* glsl */ `
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`;

export { color_pars_fragment as default };
