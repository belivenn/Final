(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{5970:function(t,e,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.map=e.array=e.rustEnum=e.str=e.vecU8=e.tagged=e.vec=e.bool=e.option=e.publicKey=e.i256=e.u256=e.i128=e.u128=e.i64=e.u64=e.struct=e.f64=e.f32=e.i32=e.u32=e.i16=e.u16=e.i8=e.u8=void 0;let s=r(698),o=r(5065),a=i(r(3550));var u=r(698);Object.defineProperty(e,"u8",{enumerable:!0,get:function(){return u.u8}}),Object.defineProperty(e,"i8",{enumerable:!0,get:function(){return u.s8}}),Object.defineProperty(e,"u16",{enumerable:!0,get:function(){return u.u16}}),Object.defineProperty(e,"i16",{enumerable:!0,get:function(){return u.s16}}),Object.defineProperty(e,"u32",{enumerable:!0,get:function(){return u.u32}}),Object.defineProperty(e,"i32",{enumerable:!0,get:function(){return u.s32}}),Object.defineProperty(e,"f32",{enumerable:!0,get:function(){return u.f32}}),Object.defineProperty(e,"f64",{enumerable:!0,get:function(){return u.f64}}),Object.defineProperty(e,"struct",{enumerable:!0,get:function(){return u.struct}});class h extends s.Layout{constructor(t,e,r){super(t,r),this.blob=(0,s.blob)(t),this.signed=e}decode(t,e=0){let r=new a.default(this.blob.decode(t,e),10,"le");return this.signed?r.fromTwos(8*this.span).clone():r}encode(t,e,r=0){return this.signed&&(t=t.toTwos(8*this.span)),this.blob.encode(t.toArrayLike(n,"le",this.span),e,r)}}function c(t){return new h(8,!1,t)}function d(t){return new h(8,!0,t)}function l(t){return new h(16,!1,t)}function f(t){return new h(16,!0,t)}function p(t){return new h(32,!1,t)}function y(t){return new h(32,!0,t)}e.u64=c,e.i64=d,e.u128=l,e.i128=f,e.u256=p,e.i256=y;class w extends s.Layout{constructor(t,e,r,n){super(t.span,n),this.layout=t,this.decoder=e,this.encoder=r}decode(t,e){return this.decoder(this.layout.decode(t,e))}encode(t,e,r){return this.layout.encode(this.encoder(t),e,r)}getSpan(t,e){return this.layout.getSpan(t,e)}}function g(t){return new w((0,s.blob)(32),t=>new o.PublicKey(t),t=>t.toBuffer(),t)}e.publicKey=g;class b extends s.Layout{constructor(t,e){super(-1,e),this.layout=t,this.discriminator=(0,s.u8)()}encode(t,e,r=0){return null==t?this.discriminator.encode(0,e,r):(this.discriminator.encode(1,e,r),this.layout.encode(t,e,r+1)+1)}decode(t,e=0){let r=this.discriminator.decode(t,e);if(0===r)return null;if(1===r)return this.layout.decode(t,e+1);throw Error("Invalid option "+this.property)}getSpan(t,e=0){let r=this.discriminator.decode(t,e);if(0===r)return 1;if(1===r)return this.layout.getSpan(t,e+1)+1;throw Error("Invalid option "+this.property)}}function v(t,e){return new b(t,e)}function m(t){return new w((0,s.u8)(),E,x,t)}function E(t){if(0===t)return!1;if(1===t)return!0;throw Error("Invalid bool: "+t)}function x(t){return t?1:0}function S(t,e){let r=(0,s.u32)("length"),n=(0,s.struct)([r,(0,s.seq)(t,(0,s.offset)(r,-r.span),"values")]);return new w(n,({values:t})=>t,t=>({values:t}),e)}function L(t,e,r){let n=(0,s.struct)([c("tag"),e.replicate("data")]);function i({tag:e,data:r}){if(!e.eq(t))throw Error("Invalid tag, expected: "+t.toString("hex")+", got: "+e.toString("hex"));return r}return new w(n,i,e=>({tag:t,data:e}),r)}function B(t){let e=(0,s.u32)("length"),r=(0,s.struct)([e,(0,s.blob)((0,s.offset)(e,-e.span),"data")]);return new w(r,({data:t})=>t,t=>({data:t}),t)}function A(t){return new w(B(),t=>t.toString("utf-8"),t=>n.from(t,"utf-8"),t)}function I(t,e,r){let n=(0,s.union)(null!=r?r:(0,s.u8)(),e);return t.forEach((t,e)=>n.addVariant(e,t,t.property)),n}function _(t,e,r){let n=(0,s.struct)([(0,s.seq)(t,e,"values")]);return new w(n,({values:t})=>t,t=>({values:t}),r)}e.option=v,e.bool=m,e.vec=S,e.tagged=L,e.vecU8=B,e.str=A,e.rustEnum=I,e.array=_;class U extends s.Layout{constructor(t,e,r){super(t.span+e.span,r),this.keyLayout=t,this.valueLayout=e}decode(t,e){e=e||0;let r=this.keyLayout.decode(t,e),n=this.valueLayout.decode(t,e+this.keyLayout.getSpan(t,e));return[r,n]}encode(t,e,r){r=r||0;let n=this.keyLayout.encode(t[0],e,r),i=this.valueLayout.encode(t[1],e,r+n);return n+i}getSpan(t,e){return this.keyLayout.getSpan(t,e)+this.valueLayout.getSpan(t,e)}}function k(t,e,r){let n=(0,s.u32)("length"),i=(0,s.struct)([n,(0,s.seq)(new U(t,e),(0,s.offset)(n,-n.span),"values")]);return new w(i,({values:t})=>new Map(t),t=>({values:Array.from(t.entries())}),r)}e.map=k},8755:function(t){"use strict";let e=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,o=RegExp("^"+s.source),a=RegExp(s.source+i.source,"gu"),u=RegExp("\\d+"+i.source,"gu"),h=(t,n,i)=>{let s=!1,o=!1,a=!1;for(let u=0;u<t.length;u++){let h=t[u];s&&e.test(h)?(t=t.slice(0,u)+"-"+t.slice(u),s=!1,a=o,o=!0,u++):o&&a&&r.test(h)?(t=t.slice(0,u-1)+"-"+t.slice(u-1),a=o,o=!1,s=!0):(s=n(h)===h&&i(h)!==h,a=o,o=i(h)===h&&n(h)!==h)}return t},c=(t,e)=>(n.lastIndex=0,t.replace(n,t=>e(t))),d=(t,e)=>(a.lastIndex=0,u.lastIndex=0,t.replace(a,(t,r)=>e(r)).replace(u,t=>e(t))),l=(t,e)=>{if(!("string"==typeof t||Array.isArray(t)))throw TypeError("Expected the input to be `string | string[]`");if(e={pascalCase:!1,preserveConsecutiveUppercase:!1,...e},0===(t=Array.isArray(t)?t.map(t=>t.trim()).filter(t=>t.length).join("-"):t.trim()).length)return"";let r=!1===e.locale?t=>t.toLowerCase():t=>t.toLocaleLowerCase(e.locale),n=!1===e.locale?t=>t.toUpperCase():t=>t.toLocaleUpperCase(e.locale);if(1===t.length)return e.pascalCase?n(t):r(t);let i=t!==r(t);return i&&(t=h(t,r,n)),t=t.replace(o,""),t=e.preserveConsecutiveUppercase?c(t,r):r(t),e.pascalCase&&(t=n(t.charAt(0))+t.slice(1)),d(t,n)};t.exports=l,t.exports.default=l},698:function(t,e,r){"use strict";var n=r(8764).Buffer;/**
 * Support for translating between Buffer instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */class i{constructor(t,e){if(!Number.isInteger(t))throw TypeError("span must be an integer");this.span=t,this.property=e}makeDestinationObject(){return{}}decode(t,e){throw Error("Layout is abstract")}encode(t,e,r){throw Error("Layout is abstract")}getSpan(t,e){if(0>this.span)throw RangeError("indeterminate span");return this.span}replicate(t){let e=Object.create(this.constructor.prototype);return Object.assign(e,this),e.property=t,e}fromArray(t){}}function s(t,e){return e.property?t+"["+e.property+"]":t}function o(t,e){if("function"!=typeof t)throw TypeError("Class must be constructor");if(t.hasOwnProperty("layout_"))throw Error("Class is already bound to a layout");if(!(e&&e instanceof i))throw TypeError("layout must be a Layout");if(e.hasOwnProperty("boundConstructor_"))throw Error("layout is already bound to a constructor");t.layout_=e,e.boundConstructor_=t,e.makeDestinationObject=()=>new t,Object.defineProperty(t.prototype,"encode",{value:function(t,r){return e.encode(this,t,r)},writable:!0}),Object.defineProperty(t,"decode",{value:function(t,r){return e.decode(t,r)},writable:!0})}e.Layout=i,e.nameWithProperty=s,e.bindConstructorLayout=o;class a extends i{isCount(){throw Error("ExternalLayout is abstract")}}class u extends a{constructor(t,e){if(void 0===t&&(t=1),!Number.isInteger(t)||0>=t)throw TypeError("elementSpan must be a (positive) integer");super(-1,e),this.elementSpan=t}isCount(){return!0}decode(t,e){void 0===e&&(e=0);let r=t.length-e;return Math.floor(r/this.elementSpan)}encode(t,e,r){return 0}}class h extends a{constructor(t,e,r){if(!(t instanceof i))throw TypeError("layout must be a Layout");if(void 0===e)e=0;else if(!Number.isInteger(e))throw TypeError("offset must be integer or undefined");super(t.span,r||t.property),this.layout=t,this.offset=e}isCount(){return this.layout instanceof c||this.layout instanceof d}decode(t,e){return void 0===e&&(e=0),this.layout.decode(t,e+this.offset)}encode(t,e,r){return void 0===r&&(r=0),this.layout.encode(t,e,r+this.offset)}}class c extends i{constructor(t,e){if(super(t,e),6<this.span)throw RangeError("span must not exceed 6 bytes")}decode(t,e){return void 0===e&&(e=0),t.readUIntLE(e,this.span)}encode(t,e,r){return void 0===r&&(r=0),e.writeUIntLE(t,r,this.span),this.span}}class d extends i{constructor(t,e){if(super(t,e),6<this.span)throw RangeError("span must not exceed 6 bytes")}decode(t,e){return void 0===e&&(e=0),t.readUIntBE(e,this.span)}encode(t,e,r){return void 0===r&&(r=0),e.writeUIntBE(t,r,this.span),this.span}}class l extends i{constructor(t,e){if(super(t,e),6<this.span)throw RangeError("span must not exceed 6 bytes")}decode(t,e){return void 0===e&&(e=0),t.readIntLE(e,this.span)}encode(t,e,r){return void 0===r&&(r=0),e.writeIntLE(t,r,this.span),this.span}}class f extends i{constructor(t,e){if(super(t,e),6<this.span)throw RangeError("span must not exceed 6 bytes")}decode(t,e){return void 0===e&&(e=0),t.readIntBE(e,this.span)}encode(t,e,r){return void 0===r&&(r=0),e.writeIntBE(t,r,this.span),this.span}}let p=4294967296;function y(t){let e=Math.floor(t/p),r=t-e*p;return{hi32:e,lo32:r}}function w(t,e){return t*p+e}class g extends i{constructor(t){super(8,t)}decode(t,e){void 0===e&&(e=0);let r=t.readUInt32LE(e),n=t.readUInt32LE(e+4);return w(n,r)}encode(t,e,r){void 0===r&&(r=0);let n=y(t);return e.writeUInt32LE(n.lo32,r),e.writeUInt32LE(n.hi32,r+4),8}}class b extends i{constructor(t){super(8,t)}decode(t,e){void 0===e&&(e=0);let r=t.readUInt32BE(e),n=t.readUInt32BE(e+4);return w(r,n)}encode(t,e,r){void 0===r&&(r=0);let n=y(t);return e.writeUInt32BE(n.hi32,r),e.writeUInt32BE(n.lo32,r+4),8}}class v extends i{constructor(t){super(8,t)}decode(t,e){void 0===e&&(e=0);let r=t.readUInt32LE(e),n=t.readInt32LE(e+4);return w(n,r)}encode(t,e,r){void 0===r&&(r=0);let n=y(t);return e.writeUInt32LE(n.lo32,r),e.writeInt32LE(n.hi32,r+4),8}}class m extends i{constructor(t){super(8,t)}decode(t,e){void 0===e&&(e=0);let r=t.readInt32BE(e),n=t.readUInt32BE(e+4);return w(r,n)}encode(t,e,r){void 0===r&&(r=0);let n=y(t);return e.writeInt32BE(n.hi32,r),e.writeUInt32BE(n.lo32,r+4),8}}class E extends i{constructor(t){super(4,t)}decode(t,e){return void 0===e&&(e=0),t.readFloatLE(e)}encode(t,e,r){return void 0===r&&(r=0),e.writeFloatLE(t,r),4}}class x extends i{constructor(t){super(4,t)}decode(t,e){return void 0===e&&(e=0),t.readFloatBE(e)}encode(t,e,r){return void 0===r&&(r=0),e.writeFloatBE(t,r),4}}class S extends i{constructor(t){super(8,t)}decode(t,e){return void 0===e&&(e=0),t.readDoubleLE(e)}encode(t,e,r){return void 0===r&&(r=0),e.writeDoubleLE(t,r),8}}class L extends i{constructor(t){super(8,t)}decode(t,e){return void 0===e&&(e=0),t.readDoubleBE(e)}encode(t,e,r){return void 0===r&&(r=0),e.writeDoubleBE(t,r),8}}class B extends i{constructor(t,e,r){if(!(t instanceof i))throw TypeError("elementLayout must be a Layout");if(!(e instanceof a&&e.isCount()||Number.isInteger(e)&&0<=e))throw TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");let n=-1;e instanceof a||!(0<t.span)||(n=e*t.span),super(n,r),this.elementLayout=t,this.count=e}getSpan(t,e){if(0<=this.span)return this.span;void 0===e&&(e=0);let r=0,n=this.count;if(n instanceof a&&(n=n.decode(t,e)),0<this.elementLayout.span)r=n*this.elementLayout.span;else{let i=0;for(;i<n;)r+=this.elementLayout.getSpan(t,e+r),++i}return r}decode(t,e){void 0===e&&(e=0);let r=[],n=0,i=this.count;for(i instanceof a&&(i=i.decode(t,e));n<i;)r.push(this.elementLayout.decode(t,e)),e+=this.elementLayout.getSpan(t,e),n+=1;return r}encode(t,e,r){void 0===r&&(r=0);let n=this.elementLayout,i=t.reduce((t,i)=>t+n.encode(i,e,r+t),0);return this.count instanceof a&&this.count.encode(t.length,e,r),i}}class A extends i{constructor(t,e,r){if(!(Array.isArray(t)&&t.reduce((t,e)=>t&&e instanceof i,!0)))throw TypeError("fields must be array of Layout instances");for(let n of("boolean"==typeof e&&void 0===r&&(r=e,e=void 0),t))if(0>n.span&&void 0===n.property)throw Error("fields cannot contain unnamed variable-length layout");let n=-1;try{n=t.reduce((t,e)=>t+e.getSpan(),0)}catch(t){}super(n,e),this.fields=t,this.decodePrefixes=!!r}getSpan(t,e){if(0<=this.span)return this.span;void 0===e&&(e=0);let r=0;try{r=this.fields.reduce((r,n)=>{let i=n.getSpan(t,e);return e+=i,r+i},0)}catch(t){throw RangeError("indeterminate span")}return r}decode(t,e){void 0===e&&(e=0);let r=this.makeDestinationObject();for(let n of this.fields)if(void 0!==n.property&&(r[n.property]=n.decode(t,e)),e+=n.getSpan(t,e),this.decodePrefixes&&t.length===e)break;return r}encode(t,e,r){void 0===r&&(r=0);let n=r,i=0,s=0;for(let n of this.fields){let o=n.span;if(s=0<o?o:0,void 0!==n.property){let i=t[n.property];void 0!==i&&(s=n.encode(i,e,r),0>o&&(o=n.getSpan(e,r)))}i=r,r+=o}return i+s-n}fromArray(t){let e=this.makeDestinationObject();for(let r of this.fields)void 0!==r.property&&0<t.length&&(e[r.property]=t.shift());return e}layoutFor(t){if("string"!=typeof t)throw TypeError("property must be string");for(let e of this.fields)if(e.property===t)return e}offsetOf(t){if("string"!=typeof t)throw TypeError("property must be string");let e=0;for(let r of this.fields){if(r.property===t)return e;0>r.span?e=-1:0<=e&&(e+=r.span)}}}class I{constructor(t){this.property=t}decode(){throw Error("UnionDiscriminator is abstract")}encode(){throw Error("UnionDiscriminator is abstract")}}class _ extends I{constructor(t,e){if(!(t instanceof a&&t.isCount()))throw TypeError("layout must be an unsigned integer ExternalLayout");super(e||t.property||"variant"),this.layout=t}decode(t,e){return this.layout.decode(t,e)}encode(t,e,r){return this.layout.encode(t,e,r)}}class U extends i{constructor(t,e,r){let n=t instanceof c||t instanceof d;if(n)t=new _(new h(t));else if(t instanceof a&&t.isCount())t=new _(t);else if(!(t instanceof I))throw TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");if(void 0===e&&(e=null),!(null===e||e instanceof i))throw TypeError("defaultLayout must be null or a Layout");if(null!==e){if(0>e.span)throw Error("defaultLayout must have constant span");void 0===e.property&&(e=e.replicate("content"))}let s=-1;e&&0<=(s=e.span)&&n&&(s+=t.layout.span),super(s,r),this.discriminator=t,this.usesPrefixDiscriminator=n,this.defaultLayout=e,this.registry={};let o=this.defaultGetSourceVariant.bind(this);this.getSourceVariant=function(t){return o(t)},this.configGetSourceVariant=function(t){o=t.bind(this)}}getSpan(t,e){if(0<=this.span)return this.span;void 0===e&&(e=0);let r=this.getVariant(t,e);if(!r)throw Error("unable to determine span for unrecognized variant");return r.getSpan(t,e)}defaultGetSourceVariant(t){if(t.hasOwnProperty(this.discriminator.property)){if(this.defaultLayout&&t.hasOwnProperty(this.defaultLayout.property))return;let e=this.registry[t[this.discriminator.property]];if(e&&(!e.layout||t.hasOwnProperty(e.property)))return e}else for(let e in this.registry){let r=this.registry[e];if(t.hasOwnProperty(r.property))return r}throw Error("unable to infer src variant")}decode(t,e){let r;void 0===e&&(e=0);let n=this.discriminator,i=n.decode(t,e),s=this.registry[i];if(void 0===s){let o=0;s=this.defaultLayout,this.usesPrefixDiscriminator&&(o=n.layout.span),(r=this.makeDestinationObject())[n.property]=i,r[s.property]=this.defaultLayout.decode(t,e+o)}else r=s.decode(t,e);return r}encode(t,e,r){void 0===r&&(r=0);let n=this.getSourceVariant(t);if(void 0===n){let n=this.discriminator,i=this.defaultLayout,s=0;return this.usesPrefixDiscriminator&&(s=n.layout.span),n.encode(t[n.property],e,r),s+i.encode(t[i.property],e,r+s)}return n.encode(t,e,r)}addVariant(t,e,r){let n=new k(this,t,e,r);return this.registry[t]=n,n}getVariant(t,e){let r=t;return n.isBuffer(t)&&(void 0===e&&(e=0),r=this.discriminator.decode(t,e)),this.registry[r]}}class k extends i{constructor(t,e,r,n){if(!(t instanceof U))throw TypeError("union must be a Union");if(!Number.isInteger(e)||0>e)throw TypeError("variant must be a (non-negative) integer");if("string"==typeof r&&void 0===n&&(n=r,r=null),r){if(!(r instanceof i))throw TypeError("layout must be a Layout");if(null!==t.defaultLayout&&0<=r.span&&r.span>t.defaultLayout.span)throw Error("variant span exceeds span of containing union");if("string"!=typeof n)throw TypeError("variant must have a String property")}let s=t.span;0>t.span&&0<=(s=r?r.span:0)&&t.usesPrefixDiscriminator&&(s+=t.discriminator.layout.span),super(s,n),this.union=t,this.variant=e,this.layout=r||null}getSpan(t,e){if(0<=this.span)return this.span;void 0===e&&(e=0);let r=0;return this.union.usesPrefixDiscriminator&&(r=this.union.discriminator.layout.span),r+this.layout.getSpan(t,e+r)}decode(t,e){let r=this.makeDestinationObject();if(void 0===e&&(e=0),this!==this.union.getVariant(t,e))throw Error("variant mismatch");let n=0;return this.union.usesPrefixDiscriminator&&(n=this.union.discriminator.layout.span),this.layout?r[this.property]=this.layout.decode(t,e+n):this.property?r[this.property]=!0:this.union.usesPrefixDiscriminator&&(r[this.union.discriminator.property]=this.variant),r}encode(t,e,r){void 0===r&&(r=0);let n=0;if(this.union.usesPrefixDiscriminator&&(n=this.union.discriminator.layout.span),this.layout&&!t.hasOwnProperty(this.property))throw TypeError("variant lacks property "+this.property);this.union.discriminator.encode(this.variant,e,r);let i=n;if(this.layout&&(this.layout.encode(t[this.property],e,r+n),i+=this.layout.getSpan(e,r+n),0<=this.union.span&&i>this.union.span))throw Error("encoded variant overruns containing union");return i}fromArray(t){if(this.layout)return this.layout.fromArray(t)}}function O(t){return 0>t&&(t+=4294967296),t}class T extends i{constructor(t,e,r){if(!(t instanceof c||t instanceof d))throw TypeError("word must be a UInt or UIntBE layout");if("string"==typeof e&&void 0===r&&(r=e,e=void 0),4<t.span)throw RangeError("word cannot exceed 32 bits");super(t.span,r),this.word=t,this.msb=!!e,this.fields=[];let n=0;this._packedSetValue=function(t){return n=O(t),this},this._packedGetValue=function(){return n}}decode(t,e){let r=this.makeDestinationObject();void 0===e&&(e=0);let n=this.word.decode(t,e);for(let t of(this._packedSetValue(n),this.fields))void 0!==t.property&&(r[t.property]=t.decode(n));return r}encode(t,e,r){void 0===r&&(r=0);let n=this.word.decode(e,r);for(let e of(this._packedSetValue(n),this.fields))if(void 0!==e.property){let r=t[e.property];void 0!==r&&e.encode(r)}return this.word.encode(this._packedGetValue(),e,r)}addField(t,e){let r=new P(this,t,e);return this.fields.push(r),r}addBoolean(t){let e=new C(this,t);return this.fields.push(e),e}fieldFor(t){if("string"!=typeof t)throw TypeError("property must be string");for(let e of this.fields)if(e.property===t)return e}}class P{constructor(t,e,r){if(!(t instanceof T))throw TypeError("container must be a BitStructure");if(!Number.isInteger(e)||0>=e)throw TypeError("bits must be positive integer");let n=8*t.span,i=t.fields.reduce((t,e)=>t+e.bits,0);if(e+i>n)throw Error("bits too long for span remainder ("+(n-i)+" of "+n+" remain)");this.container=t,this.bits=e,this.valueMask=(1<<e)-1,32===e&&(this.valueMask=4294967295),this.start=i,this.container.msb&&(this.start=n-i-e),this.wordMask=O(this.valueMask<<this.start),this.property=r}decode(){let t=this.container._packedGetValue(),e=O(t&this.wordMask),r=e>>>this.start;return r}encode(t){if(!Number.isInteger(t)||t!==O(t&this.valueMask))throw TypeError(s("BitField.encode",this)+" value must be integer not exceeding "+this.valueMask);let e=this.container._packedGetValue(),r=O(t<<this.start);this.container._packedSetValue(O(e&~this.wordMask)|r)}}class C extends P{constructor(t,e){super(t,1,e)}decode(t,e){return!!P.prototype.decode.call(this,t,e)}encode(t){return"boolean"==typeof t&&(t=+t),P.prototype.encode.call(this,t)}}class D extends i{constructor(t,e){if(!(t instanceof a&&t.isCount()||Number.isInteger(t)&&0<=t))throw TypeError("length must be positive integer or an unsigned integer ExternalLayout");let r=-1;t instanceof a||(r=t),super(r,e),this.length=t}getSpan(t,e){let r=this.span;return 0>r&&(r=this.length.decode(t,e)),r}decode(t,e){void 0===e&&(e=0);let r=this.span;return 0>r&&(r=this.length.decode(t,e)),t.slice(e,e+r)}encode(t,e,r){let i=this.length;if(this.length instanceof a&&(i=t.length),!(n.isBuffer(t)&&i===t.length))throw TypeError(s("Blob.encode",this)+" requires (length "+i+") Buffer as src");if(r+i>e.length)throw RangeError("encoding overruns Buffer");return e.write(t.toString("hex"),r,i,"hex"),this.length instanceof a&&this.length.encode(i,e,r),i}}class j extends i{constructor(t){super(-1,t)}getSpan(t,e){if(!n.isBuffer(t))throw TypeError("b must be a Buffer");void 0===e&&(e=0);let r=e;for(;r<t.length&&0!==t[r];)r+=1;return 1+r-e}decode(t,e,r){void 0===e&&(e=0);let n=this.getSpan(t,e);return t.slice(e,e+n-1).toString("utf-8")}encode(t,e,r){void 0===r&&(r=0),"string"!=typeof t&&(t=t.toString());let i=new n(t,"utf8"),s=i.length;if(r+s>e.length)throw RangeError("encoding overruns Buffer");return i.copy(e,r),e[r+s]=0,s+1}}class V extends i{constructor(t,e){if("string"==typeof t&&void 0===e&&(e=t,t=void 0),void 0===t)t=-1;else if(!Number.isInteger(t))throw TypeError("maxSpan must be an integer");super(-1,e),this.maxSpan=t}getSpan(t,e){if(!n.isBuffer(t))throw TypeError("b must be a Buffer");return void 0===e&&(e=0),t.length-e}decode(t,e,r){void 0===e&&(e=0);let n=this.getSpan(t,e);if(0<=this.maxSpan&&this.maxSpan<n)throw RangeError("text length exceeds maxSpan");return t.slice(e,e+n).toString("utf-8")}encode(t,e,r){void 0===r&&(r=0),"string"!=typeof t&&(t=t.toString());let i=new n(t,"utf8"),s=i.length;if(0<=this.maxSpan&&this.maxSpan<s)throw RangeError("text length exceeds maxSpan");if(r+s>e.length)throw RangeError("encoding overruns Buffer");return i.copy(e,r),s}}class N extends i{constructor(t,e){super(0,e),this.value=t}decode(t,e,r){return this.value}encode(t,e,r){return 0}}e.ExternalLayout=a,e.GreedyCount=u,e.OffsetLayout=h,e.UInt=c,e.UIntBE=d,e.Int=l,e.IntBE=f,e.Float=E,e.FloatBE=x,e.Double=S,e.DoubleBE=L,e.Sequence=B,e.Structure=A,e.UnionDiscriminator=I,e.UnionLayoutDiscriminator=_,e.Union=U,e.VariantLayout=k,e.BitStructure=T,e.BitField=P,e.Boolean=C,e.Blob=D,e.CString=j,e.UTF8=V,e.Constant=N,e.greedy=(t,e)=>new u(t,e),e.offset=(t,e,r)=>new h(t,e,r),e.u8=t=>new c(1,t),e.u16=t=>new c(2,t),e.u24=t=>new c(3,t),e.u32=t=>new c(4,t),e.u40=t=>new c(5,t),e.u48=t=>new c(6,t),e.nu64=t=>new g(t),e.u16be=t=>new d(2,t),e.u24be=t=>new d(3,t),e.u32be=t=>new d(4,t),e.u40be=t=>new d(5,t),e.u48be=t=>new d(6,t),e.nu64be=t=>new b(t),e.s8=t=>new l(1,t),e.s16=t=>new l(2,t),e.s24=t=>new l(3,t),e.s32=t=>new l(4,t),e.s40=t=>new l(5,t),e.s48=t=>new l(6,t),e.ns64=t=>new v(t),e.s16be=t=>new f(2,t),e.s24be=t=>new f(3,t),e.s32be=t=>new f(4,t),e.s40be=t=>new f(5,t),e.s48be=t=>new f(6,t),e.ns64be=t=>new m(t),e.f32=t=>new E(t),e.f32be=t=>new x(t),e.f64=t=>new S(t),e.f64be=t=>new L(t),e.struct=(t,e,r)=>new A(t,e,r),e.bits=(t,e,r)=>new T(t,e,r),e.seq=(t,e,r)=>new B(t,e,r),e.union=(t,e,r)=>new U(t,e,r),e.unionLayoutDiscriminator=(t,e)=>new _(t,e),e.blob=(t,e)=>new D(t,e),e.cstr=t=>new j(t),e.utf8=(t,e)=>new V(t,e),e.const=(t,e)=>new N(t,e)},2023:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__,process=__webpack_require__(4155);!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(r){return new Sha256(e,!0).update(r)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(t){return e.create().update(t)};for(var r=0;r<OUTPUT_TYPES.length;++r){var n=OUTPUT_TYPES[r];e[n]=createOutputMethod(n,t)}return e},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"==typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null==t)throw Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(r,n){return new HmacSha256(r,e,!0).update(n)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(e){return new HmacSha256(e,t)},e.update=function(t,r){return e.create(t).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var n=OUTPUT_TYPES[r];e[n]=createHmacOutputMethod(n,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,e,r){var n,i=typeof t;if("string"===i){var s,o=[],a=t.length,u=0;for(n=0;n<a;++n)(s=t.charCodeAt(n))<128?o[u++]=s:s<2048?(o[u++]=192|s>>6,o[u++]=128|63&s):s<55296||s>=57344?(o[u++]=224|s>>12,o[u++]=128|s>>6&63,o[u++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++n)),o[u++]=240|s>>18,o[u++]=128|s>>12&63,o[u++]=128|s>>6&63,o[u++]=128|63&s);t=o}else if("object"===i){if(null===t)throw Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw Error(ERROR)}else throw Error(ERROR);t.length>64&&(t=new Sha256(e,!0).update(t).array());var h=[],c=[];for(n=0;n<64;++n){var d=t[n]||0;h[n]=92^d,c[n]=54^d}Sha256.call(this,e,r),this.update(c),this.oKeyPad=h,this.inner=!0,this.sharedMemory=r}Sha256.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"===r){if(null===t)throw Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw Error(ERROR)}else throw Error(ERROR);e=!0}for(var n,i,s=0,o=t.length,a=this.blocks;s<o;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)for(i=this.start;s<o&&i<64;++s)a[i>>2]|=t[s]<<SHIFT[3&i++];else for(i=this.start;s<o&&i<64;++s)(n=t.charCodeAt(s))<128?a[i>>2]|=n<<SHIFT[3&i++]:n<2048?(a[i>>2]|=(192|n>>6)<<SHIFT[3&i++],a[i>>2]|=(128|63&n)<<SHIFT[3&i++]):n<55296||n>=57344?(a[i>>2]|=(224|n>>12)<<SHIFT[3&i++],a[i>>2]|=(128|n>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&n)<<SHIFT[3&i++]):(n=65536+((1023&n)<<10|1023&t.charCodeAt(++s)),a[i>>2]|=(240|n>>18)<<SHIFT[3&i++],a[i>>2]|=(128|n>>12&63)<<SHIFT[3&i++],a[i>>2]|=(128|n>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&n)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=a[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,e,r,n,i,s,o,a,u,h,c,d=this.h0,l=this.h1,f=this.h2,p=this.h3,y=this.h4,w=this.h5,g=this.h6,b=this.h7,v=this.blocks;for(t=16;t<64;++t)e=((i=v[t-15])>>>7|i<<25)^(i>>>18|i<<14)^i>>>3,r=((i=v[t-2])>>>17|i<<15)^(i>>>19|i<<13)^i>>>10,v[t]=v[t-16]+e+v[t-7]+r<<0;for(t=0,c=l&f;t<64;t+=4)this.first?(this.is224?(a=300032,b=(i=v[0]-1413257819)-150054599<<0,p=i+24177077<<0):(a=704751109,b=(i=v[0]-210244248)-1521486534<<0,p=i+143694565<<0),this.first=!1):(e=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),r=(y>>>6|y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7),n=(a=d&l)^d&f^c,i=b+r+(o=y&w^~y&g)+K[t]+v[t],s=e+n,b=p+i<<0,p=i+s<<0),e=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),r=(b>>>6|b<<26)^(b>>>11|b<<21)^(b>>>25|b<<7),n=(u=p&d)^p&l^a,i=g+r+(o=b&y^~b&w)+K[t+1]+v[t+1],s=e+n,g=f+i<<0,e=((f=i+s<<0)>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),r=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7),n=(h=f&p)^f&d^u,i=w+r+(o=g&b^~g&y)+K[t+2]+v[t+2],s=e+n,w=l+i<<0,e=((l=i+s<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),r=(w>>>6|w<<26)^(w>>>11|w<<21)^(w>>>25|w<<7),n=(c=l&f)^l&p^h,i=y+r+(o=w&g^~w&b)+K[t+3]+v[t+3],s=e+n,y=d+i<<0,d=i+s<<0;this.h0=this.h0+d<<0,this.h1=this.h1+l<<0,this.h2=this.h2+f<<0,this.h3=this.h3+p<<0,this.h4=this.h4+y<<0,this.h5=this.h5+w<<0,this.h6=this.h6+g<<0,this.h7=this.h7+b<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,n=this.h3,i=this.h4,s=this.h5,o=this.h6,a=this.h7,u=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o];return this.is224||(u+=HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]),u},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,n=this.h3,i=this.h4,s=this.h5,o=this.h6,a=this.h7,u=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s,o>>24&255,o>>16&255,o>>8&255,255&o];return this.is224||u.push(a>>24&255,a>>16&255,a>>8&255,255&a),u},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return exports}).call(exports,__webpack_require__,exports,module))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}()},4389:function(t,e,r){"use strict";function n(t){if(null==t)throw TypeError("Cannot destructure undefined")}r.d(e,{Z:function(){return n}})}}]);