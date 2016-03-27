<?php

use Illuminate\Database\Seeder;

class ImagesSeeder extends DatabaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $seedDataFromImages = $this->seedFromCSV(app_path().'/../database/csv/images.csv');

        foreach ($seedDataFromImages as $row) 
        {
                    
            DB::table('images')->insert($row);
        }
    }
}
