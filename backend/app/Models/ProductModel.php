<?php

namespace App\Models;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    use SoftDeletes;

    protected $table = "products";
    protected $guarded = [];
    protected $primaryKey = "prd_id";

    public const CREATED_AT = "prd_created_at";
    public const UPDATED_AT = "prd_updated_at";
}
