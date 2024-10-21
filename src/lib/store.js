import { immer } from "immer";
import { create } from "zustand";

export const useStore = create(
    (set) => ({
        treeData: [
            {
                id: 1,
                name: 'Documents',
                type: 'folder',
                isOpen: false,

                children: [
                    {
                        id: 2,
                        name: 'File1.txt',
                        type: 'file',
                        text: `The morning fog slowly lifted as the sun rose over the horizon,
                                casting a golden glow on the sleepy town. Birds chirped in the trees,
                                their melodies filling the air with a sense of calm. The streets were 
                                quiet, with only a few early risers walking their dogs or heading to work.
                                The smell of freshly baked bread wafted from the bakery at the corner,
                                tempting anyone passing by. A newspaper lay on a bench, untouched,
                                as the world seemed to wake up at its own pace. The small park
                                in the center of town remained empty, its benches wet with dew.
                                As the light grew stronger, the fog began to disappear,
                                revealing the colors of autumn leaves on the trees.
                                Cars slowly started to fill the streets, their engines purring softly.
                                The town was coming to life, one breath at a time.
                                Yet, in the midst of it all, there was a stillness that made the moment feel timeless.`
                    },
                    {
                        id: 3,
                        name: 'File2.txt',
                        type: 'file',
                        text: `She stood at the edge of the forest, looking into the thick woods ahead. The trees
                               towered above her, their branches forming a canopy that barely let any light through. The
                               path she had been following was now nothing more than a faint trail covered in fallen leaves.
                               The wind whispered through the trees, carrying with it the scent of pine and damp earth. She 
                               hesitated for a moment, unsure whether to continue. A rustling sound behind her made her turn,
                               but there was nothing there. The forest felt alive, almost as if it were watching her.
                               Taking a deep breath, she stepped forward, her boots crunching on the leaves beneath her feet.
                               With each step, the forest seemed to close in around her, and the world outside faded away.
                               She could feel her heart beating faster as the silence grew louder. There was no turning back now`
                    },
                    {
                        id: 4,
                        name: 'subFolder',
                        type: 'folder',
                        isOpen: false,
                        children: [
                            {
                                id: 5,
                                name: 'File5.txt',
                                type: 'file',
                                text: `The city lights flickered in the distance as the train sped through the countryside.
                                       Inside the train, passengers sat quietly, some reading, others dozing off.
                                       The rhythmic clatter of the train on the tracks was almost hypnotic.
                                       The woman sitting by the window stared out at the passing landscape,
                                       her reflection faintly visible in the glass. She wondered what the 
                                       future held for her in the city she was traveling to. The uncertainty 
                                       of it all made her anxious, but there was also a sense of excitement.
                                       The train moved swiftly, cutting through the night like an arrow. A child’s
                                       laughter broke the silence, bringing a smile to her face. The city was still
                                       hours away, but the glow on the horizon reminded her it was getting closer.
                                       She leaned back in her seat and closed her eyes, letting the gentle rocking 
                                       of the train lull her into a peaceful state.`
                            },
                            {
                                id: 6,
                                name: 'File6.txt',
                                type: 'file',
                                text: `The beach was almost deserted, save for a few people scattered along the shoreline. Waves gently lapped at the sand, leaving behind trails of foam that quickly disappeared. The sky was a brilliant shade of blue, with only a few wisps of clouds drifting lazily overhead. A seagull flew overhead, its call echoing across the water. The salty breeze brushed against her face as she walked barefoot along the edge of the water. Tiny shells crunched under her feet, each one a small treasure from the ocean. She could feel the coolness of the water as it kissed her toes, sending a shiver up her spine. The sun was warm on her skin, contrasting with the cool breeze. In the distance, a sailboat bobbed gently on the horizon, its white sails catching the sunlight. The world felt peaceful here, as if time had slowed down just for this moment.`
                            },
                        ]
                    },
                ]
            },
            {
                id: 7,
                name: 'Downloads',
                type: 'folder',
                isOpen: false,
                children: [
                    { id: 8, name: 'File8.txt', type: 'file' },
                    { id: 9, name: 'File9.txt', type: 'file' },
                    { id: 10, name: 'File10.txt', type: 'file' },
                    {
                        id: 11,
                        name: 'SubFolder2',
                        type: 'folder',
                        isOpen: false,
                        children: [
                            {
                                id: 12,
                                name: 'File12.txt',
                                type: 'file',
                                text: `He sat at the kitchen table, staring at the empty cup in front of him.
                                       The silence in the house was deafening, broken only by the faint ticking of
                                       the clock on the wall. Outside, the world went on as usual, but inside, 
                                       it felt as though time had stopped. The weight of his thoughts pressed down on him,
                                       making it hard to breathe. The cup, once filled with coffee, now sat cold and forgotten,
                                       much like the dreams he had let slip away. He glanced at the clock, realizing how much
                                       time had passed since he had first sat down. The sunlight streaming through
                                       the window had shifted, casting long shadows across the floor. He sighed and
                                       stood up, feeling the weight of his body as he moved. Life had a way of moving 
                                       forward, even when you felt like standing still.`
                            },
                            {
                                id: 13,
                                name: 'File13.txt',
                                type: 'file',
                                text: `The classroom buzzed with chatter as students settled
                                 into their seats. The teacher stood at the front, waiting  
                                 patiently for the noise to die down. Sunlight streamed in
                                  through the windows, casting a warm glow on the rows of  
                                  desks. A paper airplane sailed across the room, landing
                                   near the teacher’s feet. She picked it up with a smile 
                                   and set it aside. As the bell rang, signaling the start 
                                   of class, the room finally grew quiet. The day’s lesson 
                                   was on history, and she began by writing a date on the 
                                   board. The students, now attentive, opened their notebooks 
                                   and prepared to take notes. Outside, the world continued on 
                                   as usual, but inside the classroom, the focus was on the past. 
                                   The minutes ticked by, and soon the room was filled with the sound 
                                   of pencils scratching on paper. Learning, as always, was in motion.`
                            },
                            {
                                id: 14,
                                name: 'File14.txt',
                                type: 'file',
                                text: `The small café was tucked away in a quiet corner of the bustling city. 
                                       Inside, the smell of freshly brewed coffee filled the air, mixing with 
                                       the sweet aroma of pastries. A few customers sat at tables, either lost 
                                       in conversation or engrossed in their books. The barista moved behind the 
                                       counter with practiced ease, frothing milk and pouring espresso. The sound 
                                       of clinking cups and the gentle hum of conversation created a soothing atmosphere. 
                                       Outside, the city was alive with noise and activity, but inside the café, it was a 
                                       peaceful retreat. A woman sat by the window, sipping her coffee and watching people 
                                       pass by on the street. She loved these moments of solitude, where the world seemed 
                                       to slow down just enough for her to catch her breath. The warmth of the coffee in 
                                       her hands was comforting, a small pleasure in an otherwise busy day.

`
                            },
                            {
                                id: 15,
                                name: 'File15.txt',
                                type: 'file',
                                text: `The library was a sanctuary of silence, its shelves filled with countless books 
                                       waiting to be explored. Dust motes floated in the air, illuminated by the soft light 
                                       filtering through the tall windows. A few people wandered between the rows of books, 
                                       their footsteps muffled by the thick carpet. The librarian sat at her desk, quietly 
                                       stamping books and helping visitors with their questions. In one corner, a young man sat 
                                       hunched over a book, completely absorbed in its pages. The smell of old paper and leather-bound 
                                       volumes filled the room, creating an atmosphere of timelessness. Outside, the world rushed by, 
                                       but within these walls, everything seemed to slow down. The clock on the wall ticked softly, 
                                       marking the passage of time, but no one seemed to notice. Here, surrounded by stories and 
                                       knowledge, time felt almost irrelevant.`
                            },
                        ]
                    },
                ]
            }
        ],

        isSelectedMainFolder: null,
        isSelectedChild: null,
        contextFiles: 'To see the content of a file, select it',

        toggleFolder: (id) => set((state) => {
            const toggleItem = (item) => {
                return item.map((item) => {
                    if (item.id === id && item.type === 'folder') {
                        return { ...item, isOpen: !item.isOpen };
                    }
                    if (item.children) {
                        return { ...item, children: toggleItem(item.children) };
                    }
                    return item;
                })
            }
            return { treeData: toggleItem(state.treeData) };
        }),

        selectItem: (id) => set({ isSelectedMainFolder: id }),
        selectItemForChild: (id) => set({ isSelectedChild: id }),
        selectTextForShow: (text) => set({ contextFiles: text }),


    })
)