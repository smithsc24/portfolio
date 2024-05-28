"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[6549],{84425:(e,t,_)=>{var E;_.d(t,{p:()=>E}),function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(E||(E={}))},66549:(e,t,_)=>{_.d(t,{g:()=>s});var E=_(55678),T=(_(27052),_(84636)),R=_(5719),A=_(84425),r=_(17743);class i extends r.R{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case R.H0.R16F:case R.H0.R16I:case R.H0.R16UI:case R.H0.R32F:case R.H0.R32I:case R.H0.R32UI:case R.H0.R8_SNORM:case R.H0.R8:case R.H0.R8I:case R.H0.R8UI:this.pixelFormat=R.Ab.RED}}static validate(e,t){return new i(e,t)}}let s=class e{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,_=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.type=A.p.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,_=t;else{const _=i.validate(e,t);if(!_)throw new E.A("Texture descriptor invalid");this._descriptor=_}this._descriptor.target===R.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(_):this.setData(_)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return(0,r.e)(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(R.vt.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,t){const _=this._descriptor;if(_.width!==e||_.height!==t){if(this._wasImmutablyAllocated)throw new E.A("Immutable textures can't be resized!");_.width=e,_.height=t,this._descriptor.target===R.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;for(let t=R.Ap.TEXTURE_CUBE_MAP_POSITIVE_X;t<=R.Ap.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(t,_){var A,r;if(null===(A=this._descriptor.context)||void 0===A||!A.gl)return;const i=this._descriptor.context.gl;(0,T.Y2)(i),this._glName||(this._glName=i.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(R.vt.Texture,this)),void 0===t&&(t=null);const s=this._descriptor,C=null!==_&&void 0!==_?_:s.target,O=c(C);null===t&&(s.width=s.width||4,s.height=s.height||4,O&&(s.depth=null!==(r=s.depth)&&void 0!==r?r:1));const M=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),a(s),this._configurePixelStorage(),(0,T.Y2)(i);const l=this._deriveInternalFormat();if(I(t)){let e="width"in t?t.width:t.codedWidth,_="height"in t?t.height:t.codedHeight;const E=1;t instanceof HTMLVideoElement&&(e=t.videoWidth,_=t.videoHeight),s.width&&s.height,O&&s.depth,s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(C,l,s.hasMipmap,e,_,E),this._texImage(C,0,l,e,_,E,t),(0,T.Y2)(i),s.hasMipmap&&this.generateMipmap(),s.width||(s.width=e),s.height||(s.height=_),O&&!s.depth&&(s.depth=E)}else{const{width:e,height:_,depth:A}=s;if(null==e||null==_)throw new E.A("Width and height must be specified!");if(O&&null==A)throw new E.A("Depth must be specified!");if(s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(C,l,s.hasMipmap,e,_,A),N(t)){const T=t.levels,r=S(C,e,_,A),a=Math.min(r-1,T.length-1);i.texParameteri(s.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,a);const n=l;if(!(n in R.CQ))throw new E.A("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,_,E)=>{const R=T[Math.min(e,T.length-1)];this._compressedTexImage(C,e,n,t,_,E,R)}),a)}else this._texImage(C,0,l,e,_,A,t),(0,T.Y2)(i),s.hasMipmap&&this.generateMipmap()}n(i,this._descriptor),o(i,this._descriptor),function(e,t){var _;const E=e.capabilities.textureFilterAnisotropic;if(!E)return;e.gl.texParameterf(t.target,E.TEXTURE_MAX_ANISOTROPY,null!==(_=t.maxAnisotropy)&&void 0!==_?_:1)}(this._descriptor.context,this._descriptor),(0,T.Y2)(i),this._descriptor.context.bindTexture(M,e.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,_,T,R,A,r){let i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;r||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._descriptor,a=this._deriveInternalFormat(),{context:n,pixelFormat:o,dataType:c,target:S,isImmutable:C}=s;if(C&&!this._wasImmutablyAllocated)throw new E.A("Cannot update immutable texture before allocation!");const O=n.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);(_<0||T<0||R>s.width||A>s.height||_+R>s.width||T+A>s.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:M}=n;i&&M.pixelStorei(M.UNPACK_SKIP_ROWS,i),I(r)?M.texSubImage2D(S,t,_,T,R,A,o,c,r):N(r)?M.compressedTexSubImage2D(S,t,_,T,R,A,a,r.levels[t]):M.texSubImage2D(S,t,_,T,R,A,o,c,r),i&&M.pixelStorei(M.UNPACK_SKIP_ROWS,0),n.bindTexture(O,e.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,_,T,R,A,r,i,s){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._descriptor,n=this._deriveInternalFormat(),{context:o,pixelFormat:I,dataType:S,isImmutable:C,target:O}=a;if(C&&!this._wasImmutablyAllocated)throw new E.A("Cannot update immutable texture before allocation!");c(O)||console.warn("Attempting to set 3D texture data on a non-3D texture");const M=o.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);o.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(_<0||T<0||R<0||A>a.width||r>a.height||i>a.depth||_+A>a.width||T+r>a.height||R+i>a.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:l}=o;if(N(s))s=s.levels[t],l.compressedTexSubImage3D(O,t,_,T,R,A,r,i,n,s);else{const e=s;l.texSubImage3D(O,t,_,T,R,A,r,i,I,S,e)}o.bindTexture(M,e.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new E.A("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,a(t)}t.samplingMode===R.Cj.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=R.Cj.LINEAR_MIPMAP_NEAREST):t.samplingMode===R.Cj.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=R.Cj.NEAREST_MIPMAP_NEAREST);const _=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(_,e.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,a(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,t=e.context.gl;this._samplingModeDirty&&(n(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(o(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===R.Ab.DEPTH_STENCIL&&(this._descriptor.internalFormat=R.Ab.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case R.ld.FLOAT:switch(this._descriptor.pixelFormat){case R.Ab.RGBA:return this._descriptor.internalFormat=R.H0.RGBA32F;case R.Ab.RGB:return this._descriptor.internalFormat=R.H0.RGB32F;default:throw new E.A("Unable to derive format")}case R.ld.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case R.Ab.RGBA:return this._descriptor.internalFormat=R.H0.RGBA8;case R.Ab.RGB:return this._descriptor.internalFormat=R.H0.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===R.Ab.DEPTH_STENCIL?R.Ab.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:_,preMultiplyAlpha:E}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E?1:0)}_texStorage(e,t,_,T,A,r){const{gl:i}=this._descriptor.context;if(!(t in R.H0))throw new E.A("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const s=_?S(e,T,A,r):1;if(c(e)){if(null==r)throw new E.A("Missing depth dimension for 3D texture upload");i.texStorage3D(e,s,t,T,A,r)}else i.texStorage2D(e,s,t,T,A);this._wasImmutablyAllocated=!0}_texImage(e,t,_,T,R,A,r){const i=this._descriptor.context.gl,s=c(e),{isImmutable:a,pixelFormat:n,dataType:o}=this._descriptor;if(a){if(null!=r){const _=r;if(s){if(null==A)throw new E.A("Missing depth dimension for 3D texture upload");i.texSubImage3D(e,t,0,0,0,T,R,A,n,o,_)}else i.texSubImage2D(e,t,0,0,T,R,n,o,_)}}else{const a=r;if(s){if(null==A)throw new E.A("Missing depth dimension for 3D texture upload");i.texImage3D(e,t,_,T,R,A,0,n,o,a)}else i.texImage2D(e,t,_,T,R,0,n,o,a)}}_compressedTexImage(e,t,_,T,R,A,r){const i=this._descriptor.context.gl,s=c(e);if(this._descriptor.isImmutable){if(null!=r)if(s){if(null==A)throw new E.A("Missing depth dimension for 3D texture upload");i.compressedTexSubImage3D(e,t,0,0,0,T,R,A,_,r)}else i.compressedTexSubImage2D(e,t,0,0,T,R,_,r)}else if(s){if(null==A)throw new E.A("Missing depth dimension for 3D texture upload");i.compressedTexImage3D(e,t,_,T,R,A,0,r)}else i.compressedTexImage2D(e,t,_,T,R,0,r)}_forEachMipmapLevel(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,{width:_,height:T,depth:A,hasMipmap:r,target:i}=this._descriptor;const s=i===R.Ap.TEXTURE_3D;if(null==_||null==T||s&&null==A)throw new E.A("Missing texture dimensions for mipmap calculation");for(let E=0;e(E,_,T,A),r&&(1!==_||1!==T||s&&1!==A)&&!(E>=t);++E)_=Math.max(1,_>>1),T=Math.max(1,T>>1),s&&(A=Math.max(1,A>>1))}};function a(e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function n(e,t){let _=t.samplingMode,E=t.samplingMode;_===R.Cj.LINEAR_MIPMAP_NEAREST||_===R.Cj.LINEAR_MIPMAP_LINEAR?(_=R.Cj.LINEAR,t.hasMipmap||(E=R.Cj.LINEAR)):_!==R.Cj.NEAREST_MIPMAP_NEAREST&&_!==R.Cj.NEAREST_MIPMAP_LINEAR||(_=R.Cj.NEAREST,t.hasMipmap||(E=R.Cj.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,_),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,E)}function o(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function N(e){return null!=e&&"type"in e&&"compressed"===e.type}function I(e){return null!=e&&!N(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function c(e){return e===R.Ap.TEXTURE_3D||e===R.Ap.TEXTURE_2D_ARRAY}function S(e,t,_){let E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,T=Math.max(t,_);return e===R.Ap.TEXTURE_3D&&(T=Math.max(T,E)),Math.round(Math.log(T)/Math.LN2)+1}s.TEXTURE_UNIT_FOR_UPDATES=0},17743:(e,t,_)=>{_.d(t,{R:()=>R,e:()=>A});var E=_(5719),T=_(44393);class R{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;this.width=e,this.height=t,this.target=E.Ap.TEXTURE_2D,this.pixelFormat=E.Ab.RGBA,this.dataType=E.ld.UNSIGNED_BYTE,this.samplingMode=E.Cj.LINEAR,this.wrapMode=E.pF.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function A(e){return e.width<=0||e.height<=0?0:Math.round(e.width*e.height*(e.hasMipmap?4/3:1)*(null==e.internalFormat?4:(0,T.IB)(e.internalFormat)))}},44393:(e,t,_)=>{_.d(t,{IB:()=>i,WH:()=>A,yu:()=>r});_(27052);var E=_(84636),T=_(5719),R=_(96206);function A(e){const t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function r(e,t,_,T){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;const i=e.gl;e.bindBuffer(_);for(const a of T){const _=t.get(a.name);if(void 0===_){console.warn("There is no location for vertex attribute '".concat(a.name,"' defined."));continue}const T=r*a.stride;if(a.count<=4)i.vertexAttribPointer(_,a.count,a.type,a.normalized,a.stride,a.offset+T),i.enableVertexAttribArray(_),a.divisor>0&&e.gl.vertexAttribDivisor(_,a.divisor);else if(9===a.count)for(let t=0;t<3;t++)i.vertexAttribPointer(_+t,3,a.type,a.normalized,a.stride,a.offset+12*t+T),i.enableVertexAttribArray(_+t),a.divisor>0&&e.gl.vertexAttribDivisor(_+t,a.divisor);else if(16===a.count)for(let t=0;t<4;t++){var s;i.vertexAttribPointer(_+t,4,a.type,a.normalized,a.stride,a.offset+16*t+T),i.enableVertexAttribArray(_+t),a.divisor>0&&(null===(s=e.gl)||void 0===s||s.vertexAttribDivisor(_+t,a.divisor))}else console.error("Unsupported vertex attribute element count: "+a.count);if((0,E.en)()){const t=A(e),_=(0,R._)(a.type),E=a.offset,r=Math.round(_/E)!==_/E?". Offset not a multiple of stride. DataType requires ".concat(_," bytes, but descriptor has an offset of ").concat(E):"";t&&console.error('Unable to bind vertex attribute "'.concat(a.name,'" with baseInstanceOffset ').concat(T).concat(r,":"),t,a)}}}function i(e){switch(e){case T.Ab.ALPHA:case T.Ab.LUMINANCE:case T.Ab.RED:case T.Ab.RED_INTEGER:case T.H0.R8:case T.H0.R8I:case T.H0.R8UI:case T.H0.R8_SNORM:case T.yQ.STENCIL_INDEX8:return 1;case T.Ab.LUMINANCE_ALPHA:case T.Ab.RG:case T.Ab.RG_INTEGER:case T.H0.RGBA4:case T.H0.R16F:case T.H0.R16I:case T.H0.R16UI:case T.H0.RG8:case T.H0.RG8I:case T.H0.RG8UI:case T.H0.RG8_SNORM:case T.H0.RGB565:case T.H0.RGB5_A1:case T.yQ.DEPTH_COMPONENT16:return 2;case T.Ab.DEPTH_COMPONENT:case T.Ab.RGB:case T.Ab.RGB_INTEGER:case T.H0.RGB8:case T.H0.RGB8I:case T.H0.RGB8UI:case T.H0.RGB8_SNORM:case T.H0.SRGB8:case T.yQ.DEPTH_COMPONENT24:return 3;case T.Ab.DEPTH_STENCIL:case T.Ab.DEPTH24_STENCIL8:case T.Ab.RGBA:case T.Ab.RGBA_INTEGER:case T.H0.RGBA8:case T.H0.R32F:case T.H0.R11F_G11F_B10F:case T.H0.RG16F:case T.H0.R32I:case T.H0.R32UI:case T.H0.RG16I:case T.H0.RG16UI:case T.H0.RGBA8I:case T.H0.RGBA8UI:case T.H0.RGBA8_SNORM:case T.H0.SRGB8_ALPHA8:case T.H0.RGB9_E5:case T.H0.RGB10_A2UI:case T.H0.RGB10_A2:case T.yQ.DEPTH_STENCIL:case T.yQ.DEPTH_COMPONENT32F:case T.yQ.DEPTH24_STENCIL8:return 4;case T.yQ.DEPTH32F_STENCIL8:return 5;case T.H0.RGB16F:case T.H0.RGB16I:case T.H0.RGB16UI:return 6;case T.H0.RG32F:case T.H0.RG32I:case T.H0.RG32UI:case T.H0.RGBA16F:case T.H0.RGBA16I:case T.H0.RGBA16UI:return 8;case T.H0.RGB32F:case T.H0.RGB32I:case T.H0.RGB32UI:return 12;case T.H0.RGBA32F:case T.H0.RGBA32I:case T.H0.RGBA32UI:return 16;case T.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT:case T.CQ.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case T.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT:case T.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case T.CQ.COMPRESSED_R11_EAC:case T.CQ.COMPRESSED_SIGNED_R11_EAC:case T.CQ.COMPRESSED_RGB8_ETC2:case T.CQ.COMPRESSED_SRGB8_ETC2:case T.CQ.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case T.CQ.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case T.CQ.COMPRESSED_RG11_EAC:case T.CQ.COMPRESSED_SIGNED_RG11_EAC:case T.CQ.COMPRESSED_RGBA8_ETC2_EAC:case T.CQ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}},84636:(e,t,_)=>{_.d(t,{Xc:()=>s,Y2:()=>a,en:()=>i});var E=_(55678),T=_(27052),R=_(11434);const A=()=>R.A.getLogger("esri.views.webgl.checkWebGLError");const r=!!(0,T.A)("enable-feature:webgl-debug");function i(){return r}function s(){return r}function a(e){if(i()){const t=e.getError();if(t){const _=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),T=(new Error).stack;A().error(new E.A("webgl-error","WebGL error occurred",{message:_,stack:T}))}}}},5719:(e,t,_)=>{var E,T,R,A,r,i,s,a,n,o,N,I,c,S,C,O,M,l,D,u;_.d(t,{Ab:()=>S,Ac:()=>s,Ap:()=>c,CQ:()=>L,Cj:()=>N,Co:()=>D,H0:()=>C,Hr:()=>U,MT:()=>n,NZ:()=>r,Nm:()=>P,R:()=>u,Tb:()=>A,WR:()=>T,Y7:()=>i,_U:()=>l,dn:()=>R,eA:()=>o,hn:()=>E,ld:()=>O,nI:()=>G,pF:()=>I,pe:()=>a,sS:()=>F,tx:()=>H,vt:()=>d,xM:()=>h,xV:()=>p,yQ:()=>M}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(T||(T={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(e){e[e.ADD=32774]="ADD",e[e.MIN=32775]="MIN",e[e.MAX=32776]="MAX",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(A||(A={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",e[e.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(r||(r={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(i||(i={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(s||(s={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(a||(a={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(n||(n={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(o||(o={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(N||(N={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(c||(c={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(S||(S={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(C||(C={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(M||(M={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(l||(l={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(D||(D={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(u||(u={}));const h=33984;var d,P,U;!function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.TransformFeedback=7]="TransformFeedback",e[e.Sync=8]="Sync",e[e.UNCOUNTED=9]="UNCOUNTED",e[e.LinesOfCode=9]="LinesOfCode",e[e.Uniform=10]="Uniform",e[e.COUNT=11]="COUNT"}(d||(d={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(P||(P={})),function(e){e[e.NONE=0]="NONE",e[e.BACK=1029]="BACK"}(U||(U={}));const G=33306;var L,p,B,m,F,H,f;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(L||(L={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(p||(p={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(B||(B={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(m||(m={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(F||(F={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(f||(f={}))},96206:(e,t,_)=>{_.d(t,{_:()=>T});var E=_(5719);function T(e){switch(e){case E.pe.BYTE:case E.pe.UNSIGNED_BYTE:return 1;case E.pe.SHORT:case E.pe.UNSIGNED_SHORT:return 2;case E.pe.FLOAT:case E.pe.INT:case E.pe.UNSIGNED_INT:return 4}}}}]);
//# sourceMappingURL=6549.bf1d560b.chunk.js.map