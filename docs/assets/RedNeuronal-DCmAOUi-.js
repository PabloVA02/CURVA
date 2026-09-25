import{Kt as e,Vt as t,Wt as n}from"./LeeMas-BKilKOsN.js";import{A as r,D as i,O as a,T as o,a as s,b as c,d as l,f as u,g as d,h as f,i as p,j as m,k as h,l as g,m as ee,o as _,p as te,s as v,t as ne,v as y,w as re,x as b,y as ie}from"./three.module-CWuNaQFB.js";var x=e(n(),1),S={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},C=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ae=new y(-1,1,1,-1,0,1),w=new class extends s{constructor(){super(),this.setAttribute(`position`,new g([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new g([0,2,0,0,2,0],2))}},T=class{constructor(e){this._mesh=new f(w,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ae)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},E=class extends C{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof o?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=a.clone(e.uniforms),this.material=new o({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new T(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},D=class extends C{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},O=class extends C{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},oe=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new h);this._width=n.width,this._height=n.height,t=new m(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:u}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new E(S),this.copyPass.material.blending=0,this.timer=new i}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}D!==void 0&&(r instanceof D?n=!0:r instanceof O&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new h);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},se=class extends C{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ce={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},le=class e extends C{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e===void 0?new h(256,256):new h(e.x,e.y),this.clearColor=new _(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new m(s,c,{type:u,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new m(s,c,{type:u,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new m(s,c,{type:u,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),s=Math.round(s/2),c=Math.round(c/2)}let l=ce;this.highPassUniforms=a.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new o({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let f=[6,10,14,18,22];s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new h(1/s,1/c),s=Math.round(s/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new r(1,1,1),new r(1,1,1),new r(1,1,1),new r(1,1,1),new r(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=a.clone(S.uniforms),this.blendMaterial=new o({uniforms:this.copyUniforms,vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _,this._oldClearAlpha=1,this._basic=new d,this._fsQuad=new T(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new h(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new o({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new h(.5,.5)},direction:{value:new h(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new o({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};le.BlurDirectionX=new h(1,0),le.BlurDirectionY=new h(0,1);var k={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ue=class extends C{constructor(){super(),this.isOutputPass=!0,this.uniforms=a.clone(k.uniforms),this.material=new b({name:k.name,uniforms:this.uniforms,vertexShader:k.vertexShader,fragmentShader:k.fragmentShader}),this._fsQuad=new T(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},v.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},A=t(),j=260,de=150,M=7,N=new _(`#3d7bff`),fe=new _(`#5ee6ff`),pe=new _(`#9b7bff`),P=new _(`#ffc93c`),me=e=>()=>(e=e*16807%2147483647)/2147483647,F=`
  attribute float tam;
  attribute float alfa;
  attribute vec3 tinte;
  uniform float escala;
  varying float vAlfa;
  varying vec3 vTinte;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = tam * escala / -mv.z;
    gl_Position = projectionMatrix * mv;
    vAlfa = alfa;
    vTinte = tinte;
  }
`,I=`
  varying float vAlfa;
  varying vec3 vTinte;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float halo = smoothstep(0.5, 0.0, d);
    float nucleo = smoothstep(0.16, 0.0, d);
    vec3 c = vTinte * halo * 0.5 + mix(vTinte, vec3(1.0), 0.6) * nucleo * 0.7;
    gl_FragColor = vec4(c, vAlfa * halo);
  }
`;function he(e){return new o({uniforms:{escala:{value:e}},vertexShader:F,fragmentShader:I,transparent:!0,depthWrite:!1,blending:2})}function L({progreso:e,etiquetas:t,onFallo:n}){let i=(0,x.useRef)(null),a=(0,x.useRef)(null),o=(0,x.useRef)(e);return o.current=e,(0,x.useEffect)(()=>{let e=i.current,u=a.current;if(!e||!u)return;let d=matchMedia(`(prefers-reduced-motion: reduce)`).matches,f;try{f=new ne({antialias:!1,powerPreference:`high-performance`})}catch{n();return}let m=Math.min(devicePixelRatio||1,2);f.setPixelRatio(m),e.appendChild(f.domElement);let g=new re;g.background=new _(`#050817`);let v=new ie(38,1,.1,50);v.position.set(0,.1,3.35),v.lookAt(0,0,0);let y=new l;y.rotation.set(.62,0,0),g.add(y);let b=me(20260926),x=[];for(;x.length<j;){let e=x.length%2?1:-1,t=b()*2-1,n=b()*Math.PI*2,i=Math.sqrt(1-t*t),a=1-.42*b()**2,o=i*Math.cos(n)*a,s=t*a,c=i*Math.sin(n)*a;o=Math.abs(o)*.56*e+e*.17,s*=.78,c*=1.12,s<-.46&&(s=-.46+(s+.46)*.3);let l=1+.05*Math.sin(c*9+s*5)*Math.sin(s*7);o*=l,s*=l,x.push(new r(o,s,c))}let S=[],C=new Set,ae=(e,t)=>{let n=e<t?`${e}-${t}`:`${t}-${e}`;e===t||C.has(n)||(C.add(n),S.push([e,t]))};for(let e=0;e<j;e++){let t=x.map((t,n)=>[t.distanceToSquared(x[e]),n]).filter(([,t])=>t!==e).sort((e,t)=>e[0]-t[0]).slice(0,3);for(let[,n]of t)ae(e,n)}for(let e=0;e<16;e++){let e=Math.floor(b()*j),t=x.map((t,n)=>[t.distanceToSquared(x[e]),n]).filter(([,t])=>Math.sign(x[t].x)!==Math.sign(x[e].x)).sort((e,t)=>e[0]-t[0]);t.length&&ae(e,t[0][1])}let w=x.map(()=>[]);S.forEach(([e,t],n)=>{w[e].push(n),w[t].push(n)});let T=m*4.1,E=new Float32Array(S.length*6),D=new Float32Array(S.length*6);S.forEach(([e,t],n)=>{x[e].toArray(E,n*6),x[t].toArray(E,n*6+3)});let O=new s;O.setAttribute(`position`,new p(E,3)),O.setAttribute(`color`,new p(D,3));let ce=new te({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1});y.add(new ee(O,ce));let k=new Float32Array(j*3),A=new Float32Array(j),F=new Float32Array(j),I=new Float32Array(j*3);x.forEach((e,t)=>e.toArray(k,t*3));let L=new s;L.setAttribute(`position`,new p(k,3)),L.setAttribute(`tam`,new p(A,1)),L.setAttribute(`alfa`,new p(F,1)),L.setAttribute(`tinte`,new p(I,3));let ge=he(T);y.add(new c(L,ge));let R=de*M,_e=new Float32Array(R*3),ve=new Float32Array(R),ye=new Float32Array(R),be=new Float32Array(R*3),z=new s;z.setAttribute(`position`,new p(_e,3)),z.setAttribute(`tam`,new p(ve,1)),z.setAttribute(`alfa`,new p(ye,1)),z.setAttribute(`tinte`,new p(be,3));let xe=he(T);y.add(new c(z,xe));let B=new oe(f);B.addPass(new se(g,v));let Se=new le(new h(256,256),.95,.5,.12);B.addPass(Se),B.addPass(new ue);let Ce=()=>{let t=e.clientWidth||340,n=e.clientHeight||300;f.setSize(t,n,!1),B.setSize(t,n),v.aspect=t/n,v.position.z=t<360?3.7:3.35,v.updateProjectionMatrix();let r=m*v.position.z;ge.uniforms.escala.value=r,xe.uniforms.escala.value=r};Ce();let we=new ResizeObserver(Ce);we.observe(e);let V=new Float32Array(S.length),Te=S.map(()=>N.clone()),H=new Float32Array(j),U=x.map(()=>N.clone()),Ee=Array.from({length:de},()=>({arista:0,sentido:1,t:0,vel:1,color:N.clone(),vivo:!1})),De=[N,fe,pe],W=(e,t,n=-1)=>{let r=w[e].filter(e=>e!==n);if(!r.length)return;let i=Ee.find(e=>!e.vivo);if(!i)return;let a=r[Math.floor(Math.random()*r.length)];i.arista=a,i.sentido=S[a][0]===e?1:-1,i.t=0,i.vel=1.3+Math.random()*1.4,i.color.copy(t??De[Math.floor(Math.random()*De.length)]),i.vivo=!0,V[a]=Math.max(V[a],.6),Te[a].copy(i.color)},G=[],Oe=x.map((e,t)=>t).filter(e=>x[e].y>-.2);for(;G.length<t.length&&Oe.length;){let e=Oe[0],t=-1;for(let n of Oe){let r=G.length?Math.min(...G.map(e=>x[e].distanceTo(x[n]))):x[n].z;r>t&&(t=r,e=n)}G.push(e)}let ke=Array.from(u.children),Ae=new Set,K=new r,q=-1,je=x.map(e=>e.length()),Me=0,J=0,Y=!1,Ne=0,Pe=t=>{Y=!0,Ne=t.clientX,e.setPointerCapture?.(t.pointerId)},Fe=e=>{Y&&(J=(e.clientX-Ne)*.008,Ne=e.clientX,Me+=J)},X=()=>Y=!1;e.addEventListener(`pointerdown`,Pe),e.addEventListener(`pointermove`,Fe),e.addEventListener(`pointerup`,X),e.addEventListener(`pointercancel`,X);let Z=0,Q=performance.now(),Ie=Q,Le=0,$=t=>{let n=Math.min(.05,(t-Q)/1e3);Q=t;let r=(t-Ie)/1e3,i=d?.7:o.current;for(Y||(J*=.94,Me+=J+n*.12),y.rotation.y=Math.sin(Me*.9)*.75,y.rotation.x=.62+Math.sin(r*.35)*.08,y.position.y=Math.sin(r*.8)*.03,Le+=n*(1.5+9*i);Le>1;)--Le,W(Math.floor(Math.random()*j));if(G.forEach((e,t)=>{if(!Ae.has(t)&&i>(t+.6)/(G.length+1)){Ae.add(t),H[e]=1.6,U[e].copy(P);for(let t=0;t<5;t++)W(e,P);ke[t]?.classList.add(`e-red-encendida`)}}),i>=1&&q<0&&(q=r),q>=0){let e=(r-q)*1.6;x.forEach((t,n)=>{Math.abs(je[n]-e)<.08&&(H[n]=1.4,U[n].copy(P))})}let a=.45+.3*i,s=0;for(let e of Ee){if(e.vivo){let[t,r]=S[e.arista],i=x[t].distanceTo(x[r]);if(e.t+=n*e.vel/Math.max(.12,i),e.t>=1){e.vivo=!1;let n=e.sentido===1?r:t;H[n]=Math.max(H[n],1),U[n].lerp(e.color,.6),Math.random()<a&&W(n,e.color,e.arista),Math.random()<a*.35&&W(n,e.color,e.arista)}else V[e.arista]=Math.max(V[e.arista],.9)}let[t,r]=S[e.arista],i=e.sentido===1?x[t]:x[r],o=e.sentido===1?x[r]:x[t];for(let t=0;t<M;t++,s++){let n=Math.max(0,e.t-t*.07);K.copy(i).lerp(o,n),K.toArray(_e,s*3);let r=1-t/M;ye[s]=e.vivo?r*r*.9*(n>0||t===0):0,ve[s]=(t===0?11:7)*(.4+.6*r),e.color.toArray(be,s*3)}}let c=.2+.1*i;S.forEach((e,t)=>{V[t]*=Math.exp(-n*2.4);let r=V[t],i=Te[t];for(let e=0;e<2;e++)D[t*6+e*3]=N.r*c+i.r*r*.9,D[t*6+e*3+1]=N.g*c+i.g*r*.9,D[t*6+e*3+2]=N.b*c+i.b*r*.9}),x.forEach((e,t)=>{H[t]*=Math.exp(-n*2.2);let i=.35+.15*Math.sin(r*1.7+t*1.3)+H[t];A[t]=5+7*Math.min(1.4,H[t]),F[t]=Math.min(1,.35+i*.45);let a=U[t];a.lerp(N,n*.5);let o=.45+.45*i;I[t*3]=a.r*o,I[t*3+1]=a.g*o,I[t*3+2]=a.b*o}),O.attributes.color.needsUpdate=!0,L.attributes.tam.needsUpdate=!0,L.attributes.alfa.needsUpdate=!0,L.attributes.tinte.needsUpdate=!0,z.attributes.position.needsUpdate=!0,z.attributes.tam.needsUpdate=!0,z.attributes.alfa.needsUpdate=!0,z.attributes.tinte.needsUpdate=!0,y.updateMatrixWorld();let l=e.clientWidth,u=e.clientHeight;G.forEach((e,t)=>{let n=ke[t];if(!n)return;K.copy(x[e]).applyMatrix4(y.matrixWorld);let r=K.z<-.15;K.project(v);let i=(K.x+1)/2*l,a=(1-K.y)/2*u;n.style.transform=`translate(${i.toFixed(1)}px, ${a.toFixed(1)}px)`,n.style.opacity=Ae.has(t)?r?`0.35`:`1`:`0`}),B.render(),d||(Z=requestAnimationFrame($))};if(d){for(let e=0;e<40;e++)W(Math.floor(Math.random()*j));Ee.forEach(e=>e.t=Math.random()*.8)}Z=requestAnimationFrame($);let Re=()=>{cancelAnimationFrame(Z),!document.hidden&&!d&&(Q=performance.now(),Z=requestAnimationFrame($))};return document.addEventListener(`visibilitychange`,Re),()=>{cancelAnimationFrame(Z),document.removeEventListener(`visibilitychange`,Re),we.disconnect(),e.removeEventListener(`pointerdown`,Pe),e.removeEventListener(`pointermove`,Fe),e.removeEventListener(`pointerup`,X),e.removeEventListener(`pointercancel`,X),O.dispose(),L.dispose(),z.dispose(),ce.dispose(),ge.dispose(),xe.dispose(),Se.dispose(),B.dispose(),f.dispose(),f.domElement.remove()}},[]),(0,A.jsxs)(`div`,{className:`e-red`,"aria-hidden":!0,children:[(0,A.jsx)(`div`,{className:`e-red-lienzo`,ref:i}),(0,A.jsx)(`div`,{className:`e-red-etiquetas`,ref:a,children:t.map(e=>(0,A.jsxs)(`span`,{className:`e-red-etiqueta`,children:[(0,A.jsx)(`i`,{}),e]},e))})]})}export{L as default};