var dithering_fragment = /* glsl */ `
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;

export { dithering_fragment as default };
