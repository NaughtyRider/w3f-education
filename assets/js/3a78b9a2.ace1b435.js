"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[122],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return b}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(o),b=n,p=u["".concat(s,".").concat(b)]||u[b]||h[b]||a;return o?r.createElement(p,i(i({ref:t},l),{},{components:o})):r.createElement(p,i({ref:t},l))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4714:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],c={id:"bridge",sidebar_position:1},s="B for Bridge",d={unversionedId:"AtoZ/bridge",id:"AtoZ/bridge",isDocsHomePage:!1,title:"B for Bridge",description:"What are Bridges?",source:"@site/docs/AtoZ/bridge.md",sourceDirName:"AtoZ",slug:"/AtoZ/bridge",permalink:"/w3f-education/docs/AtoZ/bridge",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/bridge.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1641481483,formattedLastUpdatedAt:"1/6/2022",sidebarPosition:1,frontMatter:{id:"bridge",sidebar_position:1},sidebar:"atoz",previous:{title:"A for Account",permalink:"/w3f-education/docs/AtoZ/account"}},l=[{value:"What are Bridges?",id:"what-are-bridges",children:[]},{value:"How do Bridges work?",id:"how-do-bridges-work",children:[]},{value:"How can we achieve Bridges?",id:"how-can-we-achieve-bridges",children:[]},{value:"What are some projects that\u2019re building Bridges, and how can you build a Bridge?",id:"what-are-some-projects-thatre-building-bridges-and-how-can-you-build-a-bridge",children:[]}],h={toc:l};function u(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"b-for-bridge"},"B for Bridge"),(0,a.kt)("h2",{id:"what-are-bridges"},"What are Bridges?"),(0,a.kt)("p",null,"Bridges are connections to the Polkadot relay chain that have special properties which allow them to communicate with other blockchains. They\u2019re secured via the Polkadot consensus and are maintained by a group of participants called Collators which we will cover in next week's post for letter C. Bridges are the cornerstone of interoperability that Polkadot is looking to deliver in the blockchain ecosystem. We can think of them as communication channels for different isolated blockchains such as Bitcoin or Ethereum that will be able to send messages, mint new coins, secure locked funds, and burn tokens among other functionality. With a bridge we enable more complex applications to be developed that can use multiple blockchains for functionality and hence combating the issue of chain maximalism."),(0,a.kt)("h2",{id:"how-do-bridges-work"},"How do Bridges work?"),(0,a.kt)("p",null,"Let's think about an example; we have two bridges, one for BTC and another for ETH and Bob wants to transfer BTC to ETH. Polkadot can facilitate this transaction via the use of it\u2019s messaging protocol that allows bridges to communicate with each other, this is called XCMP and we will cover it for the letter X later this year. The BTC bridge will send a message to the ETH bridge with the amount of BTC and Bobs ETH account into which the bridge will deposit the newly minted ETH token, let's call this PBTC. The token minting logic is executed by an Ethereum smart contract, which the bridge can trigger. Once the transaction happens on both bridges and the PBTC is minted at a 1:1 ratio as the sent BTC amount, the PBTC is deposited to Bob's ETH account. Meanwhile, the original BTC is locked up in the BTC bridge, which will be accessible only by the original sender of the transaction. So if Bob ever wants to transfer the PBTC back into his BTC account, the same smart contract can burn the PBTC on the Ethereum blockchain and take the locked up 1:1 and send it back to Bob\u2019s BTC account. This is all secured by the bridge's Collators which are synchronized with the consensus of both the bridged blockchain and the Polkadot blockchain."),(0,a.kt)("p",null,"See this video for a visual explanation of this process:\nHow Bitcoin and Ethereum can Cooperate and Collaborate Through Polkadot with Bruno Skvorc"),(0,a.kt)("h2",{id:"how-can-we-achieve-bridges"},"How can we achieve Bridges?"),(0,a.kt)("p",null,"There are a couple ways to develop a Bridge on Polkadot. Primary way is to use the Bridge pallet through the Substrate framework which the Polkadot and Kusama blockchains are also built with. Another way is to use smart contracts, especially if the blockchain being bridged is not a Substrate chain. For example, bridging Ethereum will require this approach where a smart contract living on Ethereum will be able to execute logic that the bridge requires. And lastly we can use Higher-order protocols like XClaim, a base protocol on which we can build bridges on top of. This is only recommended if the asset being bridged does not have a smart contract platform on-chain, such as BTC."),(0,a.kt)("h2",{id:"what-are-some-projects-thatre-building-bridges-and-how-can-you-build-a-bridge"},"What are some projects that\u2019re building Bridges, and how can you build a Bridge?"),(0,a.kt)("p",null,"Bridges are after all software that needs to be written and maintained, so what\u2019re some examples of this in the real world? Interoperability in a decentralized trustless way is a difficult endeavor, and at Web3 we are funding through our grants program different applications looking to build bridges such as ChainSafe and Centrifuge. Another Web3 funded project called PolkaBTC has developed a Substrate bridge to BTC. And ChainX, as mentioned earlier is a protocol that can be utilized to develop bridges and a BTC bridge has been built using that.\nIf you\u2019re interested in building your own bridge, start by looking into the Parity Bridges Common repository, where the team at Parity have put together a collection of components that are useful when building bridges."))}u.isMDXComponent=!0}}]);